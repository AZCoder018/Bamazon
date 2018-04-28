
// Pull in dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

// MySQL connection parameters
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "DrPepper",
	database: "Bamazon"
});

// Validate input, so that user can only enter positive whole numbers, and cannot enter zero
function validateInput(value) {
	var integer = Number.isInteger(parseInt(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return "Please enter a whole number other than zero.";
	}
}

//Function to prompt the user for the item/quantity they would like to purchase
function promptUserPurchase() {
	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "Please enter the Item ID for the item you would like to order.",
			validate: validateInput,
			filter: Number
		},
		{
			type: "input",
			name: "quantity",
			message: "How many of the selected item would you like to order?",
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

// Query Bamazon database to confirm that the given item ID exists in the desired quantity
	var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

// If the user selects an invalid item ID, return that user must select a valid Item ID
		
			if (data.length === 0) {
				console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
				displayInventory();

			} else {
				var productData = data[0];

// If the quantity requested by the user is in stock
			if (quantity <= productData.stock_quantity) {
				console.log("The items you requested are in stock.");

// Construct the updating query string
				var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
				
// Update the inventory
				connection.query(updateQueryStr, function(err, data) {
					if (err) throw err;

					console.log("Your order has been placed. Your total is $" + productData.price * quantity + ".");
					console.log("Thank you for shopping with Bamazon.");
					console.log("\n=================================================\n");

// End the database connection
				connection.end();
			})
				} else {
					console.log("Sorry, there is insufficent quantity of the item you ordered in stock. Your order cannot be completed.");
					console.log("Please modify your order by selecting a lesser quantity of your desired item, or choose a different item.");
					console.log("\n=================================================\n");

					displayInventory();
				}
			}
		})
	})
}

//Function to retrieve the current inventory from the database and output it to the console
function displayInventory() {

// Construct the database query string
	queryStr = 'SELECT * FROM products';

// Make the db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log("EXISTING BAMAZON INVENTORY: ");
		console.log("=================================================\n");

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += "Item ID: " + data[i].item_id + "  ||  ";
			strOut += "Product Name: " + data[i].product_name + "  ||  ";
			strOut += "Department: " + data[i].department_name + "  ||  ";
			strOut += "Price: $" + data[i].price + " || ";
			strOut += "(Quantity in stock: " + data[i].stock_quantity + ")\n";

			console.log(strOut);
		}

	  	console.log("=================================================\n");

//Prompt the user for item/quantity they would like to purchase
	  	promptUserPurchase();
	})
}

// runBamazon will execute the main application logic
function runBamazon() {

// Display the available inventory
	displayInventory();
}

// Run the application logic
runBamazon();
