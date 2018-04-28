DROP DATABASE Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(5,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('CD Player', 'Electronics', 69.99, 10),
		('Cotton Socks 10pk', 'Mens Clothing', 7.99, 50),
		('Pink Satin Nightie', 'Womens Clothing', 24.99, 10),
		('Mens Work Boots', 'Footwear', 29.99, 14),
		('Upright Vacuum', 'Housewares', 79.99, 3),
		('Glass Cleaner 32oz', 'Cleaning Supplies', 8.99, 20),
		('Stroller', 'Baby', 49.99, 5),
		('Womens Anti-Perspirant', 'Health & Beauty', 5.99, 60),
		('Car Battery', 'Auto', 119.99, 6),
		('Boys BMX Bicycle', 'Toys', 109.99, 3);

SELECT * FROM products;