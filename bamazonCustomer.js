//Require mySql and Inquirer
var mySql = require("mysql");
var inquirer = require("inquirer");

//Connection to SQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "DrPepper",
    database: "Bamazon"
});

//Confirm connection to SQL database
connection.connect(function(err){
    if (err) throw err; 
    console.log("connected as id: " + connection.threadid)
});

//Display all available items in store
function showItems(){
    connection.query('SELECT * FROM products', function(err, res) {
        if (err) throw err;
        console.log("=================================================");
        console.log("=================Items in Store==================");   
        console.log("=================================================");

        for(i=0; i<res.length; i++) {
            console.log()

        }
    )


    })

}
