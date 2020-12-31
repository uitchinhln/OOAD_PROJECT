let mysql           = require('mysql');
let storage         = require('./../storage/storage');
let statusCodes     = require('./status-codes');
let url             = require('url');
let express         = require('express');

let syntaxes        = require('./query-syntaxes');
let methods         = require('./../utils/http-methods');

let authProc        = require('./objects/auth-proc');
let productProc        = require('./objects/product-proc');

function processListStudentsInClass(dbConnection, req, res, urlData)
{
    if (urlData.classid === undefined) return null;

    dbConnection.query(storage.Query_ListStudentsInClass(urlData.classid), (err, data, fields) =>
    {
        if (err) throw err;
        res.status(statusCodes.OK).json(data);
    });
}

function processQuery(app, dbConnection)
{
    methods.AppGet(app, syntaxes.listStudentsInClass, processListStudentsInClass, dbConnection);
    // methods.AppGet(app, syntaxes.numberOfStudentsInClass, processNumberOfStudentsInClass, dbConnection);
}
//*********************************************************

// *****This function processes authentication (user) queries*****
function processAuthenticationQueries(app, dbConnection)
{
    methods.AppPost(app, syntaxes.login, authProc.DoLogin, dbConnection);
    //methods.AppPost(app, syntaxes.verify, authProc.DoVeri, dbConnection);
}
//*********************************************************

// *****This function processes authentication (user) queries*****
function processProductQueries(app, dbConnection)
{
    methods.AppPost(app, syntaxes.product.search, productProc.DoSearch, dbConnection);
    //methods.AppPost(app, syntaxes.verify, authProc.DoVeri, dbConnection);
}
//*********************************************************


module.exports =
{
    ProcessQuery: processQuery,
    ProcessAuthenticationQueries: processAuthenticationQueries,
    ProcessProductQueries: processProductQueries,
}
