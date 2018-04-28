#### BAMAZON CLI NODE APPLICATION

#### __WHAT DOES THIS APP DO?__

Bamazon is an Amazon-like storefront CLI node application which utilizes a MySQL database to keep track of orders and store inventory. This version of Bamazon has the 'Customer View' feature. 'Customer View' provides the customer with a price list of items currently in Bamazon inventory; takes in orders from customers; depletes stock from the store's inventory when an order is placed; and informs the customer of the total cost of the order. The MySQL database is updated when orders are successfully placed.

#### __HOW DO YOU GET STARTED?__

1. Clone or download the repository for Bamazon.

2. Make sure that you have MySQL Workbench installed on your computer.

3. Create a server on your computer using MySQL Workbench and the Bamazon.sql file provided in the Bamazon repository folder which you have downloaded from GitHub:

    - Set up a local connection as follows:
          - Connection Name: Local Connection
          - Connection Method: Standard (TCP/IP)
          - Hostname: localhost
          - Port: 3306
          - Username: root
   - Click 'Store in Vault' and set your password if you don't have one; Leave Default Schema blank

4. Test your MySQL Local Connection; if you cannot establish a connection, see a teacher, TA or tutor for help.

5. Using Visual Studio Code, open file bamazonCustomer.js in the Bamazon folder and include your MySQL password on line 11 of the bamazonCustomer.js file. 

6. Exit Visual Studio Code.

7. Make sure that you have node.js installed on your computer.

8. Open GitBash or Terminal, making sure that you are in the file directory location of Bamazon, and run command 'npm install', to complete installation (all necessary apis from npm.js will be downloaded and installed). 

#### __HOW DOES BAMAZON 'CUSTOMER VIEW' WORK?__

1. Use GitBash or Terminal to navigate to the file location of Bamazon. You can then enter on the command line 'node bamazonCustomer.js'. The "Existing Amazon Inventory" list will appear, followed by a prompt, requiring you to enter an Item ID from the list. See Image 1, below.

__Image 1__

![Enter Item ID](images/EnterItemID.png)

2. Select an Item ID from the list, and then press 'enter'. Another prompt will appear, asking you to then select how many of the selected Item you would like to order. You should not order more than the quantity remaining in inventory. Type an appropriate number and press 'enter'. See Image 2, below.

__Image 2__

![Select Quantity](images/SelectQuantity.png)

3. If the number of items you ordered were in stock, messages will appear informing you: (i) that your items were in stock; (ii) that your order was placed; (iii) the total cost of your order; and (iv) thanking you for shopping with Bamazon. See Image 3, below.

__Image 3__

![Completed Order](images/CompletedOrder.png)

4. If you try to order a quanitity of items that is not in stock, you will be advised that there is an insufficient quantity to complete your order. You will receive a message advising you to enter an appropriate number or to select a different Item. See the top of Image 4, below.

__Image 4__

![Insufficient Quantity](images/InsufficientQuantity.png)

#### __WHO MAINTAINS AND CONTRIBUTES TO THIS VERSION OF BAMAZON?__

This version of Bamazon was created by me, Jason Heath Meadows, Esq., currently a student at the University of Arizona Coding Boot Camp, in Gilbert, Arizona. I will maintain and contribute to this app, as necessary, as part of my Portfolio.