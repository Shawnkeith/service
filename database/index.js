var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var con = mysql.createConnection(mysqlConfig);

con.connect((err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('connected')
  }
});

var getAllProducts = function(callback) {
  con.query('SELECT * FROM sponsoredProducts', (err, sponsored) =>{
    if (err) {
      callback(err, null);
      return;
    } else {
      callback(null, sponsored);
    }
  });
};

module.exports = {getAllProducts, con};