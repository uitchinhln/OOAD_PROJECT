let path        = require('path');
let cors        = require('cors');
let express     = require('express');
let config      = require('./config');
let mysql       = require('mysql');
let crypt       = require('./utils/crypt');
let sysUtil     = require('./utils/system');

// Query processors
let processor   = require('./processors/queries-processor');
let clientProcessor   = require('./processors/client-processor');

const parser    = require('body-parser');

// Apps
let api_v1      = express();
let authApp     = express();
let productApp     = express();
let app         = express();

const port      = 8080;

app.use(cors());

// serve the static files from the react app
//app.use(express.static(path.join(__dirname, 'client'), {index: false}));

app.use('/v1', api_v1);
api_v1.use(parser.json());

api_v1.use('/auth', authApp);
authApp.use(parser.json());

api_v1.use('/product', productApp);
productApp.use(parser.json());

// Database connection
let connection  = mysql.createConnection(config.CreateMySQLDBConfig('./admin-setup/dbsetup.json'));
// Connect to database
connection.connect((err) =>
{
    // crypt.AES.Encrypt('11112000Bach', "!@#@#@!#",(result) => {console.log('Encryption successful with ' + result); });
    // crypt.AES.Decrypt('2bbd70925fc2ba3560bc36e381e4b8ef', "!@#@#@!#", (result) => console.log('Decryption successful with ' + result));
    if (err)
    {
        console.log("Error connecting database...\n\n" + err);
        return;
    }

    console.log("Database is connected!\n\n");
    processor.ProcessQuery(api_v1, connection);
    processor.ProcessAuthenticationQueries(authApp, connection);
    processor.ProcessProductQueries(productApp, connection);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});
