let statusCodes = require('../status-codes');
let loginStatus = require('../login-status');

function doSearch(dbConnection, req, res, urlData)
{
    let keyword = urlData.keyword;

    var query = "SELECT * FROM ooad.book where IDBook LIKE ? or UPPER(Name) LIKE UPPER(?)";

    dbConnection.query(query, ['%'+keyword+'%', '%'+keyword+'%'],(err, data, fields) =>
    {
        if (err) res.status(statusCodes.OK).json({status: err});
        console.log(data[0]);

        res.status(statusCodes.OK).json({error: 0, data: data});
    });
}

module.exports =
    {
        DoSearch     : doSearch,
    }
