const mysql = require('mysql');
const config = require('config');
const dbData = config.get("dbConfig");



function getData(query, cbData){
    const con = mysql.createConnection(dbData);

    con.connect( (err) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }
        console.log('connected as id ' + con.threadId);
    });
    con.query (query, function (error, results, fields) {
        if (error){
            return error;
        }else{
            cbData(results, con);
        }
    });
}


module.exports = {
    getData: getData,
};