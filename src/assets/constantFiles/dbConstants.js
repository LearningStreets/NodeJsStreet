
const connectionPrefix = 'mongodb://'; 
const connectionCurrentURL = "localhost/";
const NodeJsStreetDB = 'NodeJsStreetDB';

module.exports = Object.freeze({

    // Start : NodeJsStreetDB
db_NodeJsStreet :NodeJsStreetDB,
collection_StreetUsers : 'streetUsers',


// End : NodeJsStreetDB


// connection strings
connectionString_DB_NodeJsStreet:  (connectionPrefix +  connectionCurrentURL + NodeJsStreetDB),

// module.exports = db_NodeJsStreet
// module.exports =  collection_StreetUsers
// module.exports = connectionString_DB_NodeJsStreet


});



