// Import fs
const fs = require("fs");

// Set up custom logging tool
const logFile = fs.createWriteStream("./app/logs/access.log", { flags: "a" });

// Import custom logger tool from /app/logs directory
// const logger = require("../logs/logger.js");

// Import data from /app/data directory
const expenses = require("../data/expenses.json");
const expense_categories = require("../data/expense_categories.json");

// Import Expense Model from /app/models directory
// <-- [ Models & validation coming soon!!! ] -->
// const expense = require("../models/mt.model.js");

// Defining global message for errors
const error_message = "❌ An error has occurred: ";

// Setting path for expenses file
const expense_path = __dirname + "/../data/expenses.json";

const getRandomId = () => {
    let result = "";
    let counter = 0;
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    while (counter < 32) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
        counter += 1;
    }
    return result;
};

// Create and Save a new expense
exports.addOneExpense = (req, res) => {
    try {
        let id = getRandomId();
        expenses[id] = {
            text: req.body.text,
            amount: parseFloat(req.body.amount),
            category: req.body.category,
            datetime: req.body.datetime,
        };
        // logger.log('[ ADD ]', expenses[id]);
        logFile.write(`\n✅ [ ADD ] { text: ${req.body.text}, amount: ${req.body.amount}, category: ${req.body.category}, datetime: ${req.body.datetime} }`);
        fs.writeFile(expense_path, JSON.stringify(expenses), (err) => {
            if (err) {
                // logger.error(error_message, err);
                logFile.write(`\n${error_message} - ${err}`);
                res.status(400).send(err);
            }
            const message = "✅ Data written successfully to disk"; 
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(message);
        });
    } catch (err) {
        // logger.error(error_message, err);
        logFile.write(`\n${error_message} - ${err}`);
        res.status(400).send(err);
    }
};

// Retrieve all expenses from the database
exports.getAllExpenses = (req, res) => {
    try {
        if (Object.keys(expenses).length === 0) {
            const message = "❎ No expenses to show"; 
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(message);
        } else {
            const message = "✅ Data has been retrieved successfully"; 
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(expenses);
        }
    } catch (err) {
        // logger.error(error_message, err);
        logFile.write(`\n${error_message} - ${err}`);
        res.status(400).send(err);
    }
};

// Update an expense by the id in the request
// <-- [ TO BE ADDED IN THE NEXT VERSION OF THE APP ] -->
exports.updateOneExpense = (req, res) => {
    try {
        if (!expenses[req.params.id]) {
            // logger.error("❌ No expense with such id present");
            logFile.write("\n"+"❌ No expense with such id present");
            res.status(200).send("❌ No expense with such id present");
        } else {
            fs.writeFile(expense_path, JSON.stringify(expenses), (err) => {
                if (err) {
                    // logger.error(error_message, err);
                    logFile.write(`\n${error_message} - ${err}`);
                    res.status(400).send(err);
                } else {
                    const message = "✅ Data written successfully to disk";
                    // logger.success(message);
                    logFile.write(`\n${message}`)
                    res.status(200).send(message);
                }
            });
        }
    } catch (err) {
        // logger.error(message, err);
        logFile.write(`\n${message} - ${err}`);
        res.status(400).send(err);
    }
};

// Delete an expense with the specified id in the request
exports.deleteOneExpense = (req, res) => {
    try {
        if (!expenses[req.params.id]) {
            const message = "❌ No expense with given id";
            // logger.error(message);
            logFile.write(`\n${message} - ${err}`);
            res.status(400).send(message);
        } else {
            delete expenses[req.params.id];
            // logger.log('[ DELETE ]', req.params.id);
            logFile.write(`\n✅ [ DELETE ] ${req.params.id}`);
            fs.writeFile(expense_path, JSON.stringify(expenses), (err) => {
                if (err) {
                    // logger.error(message, err);
                    logFile.write(`\n${message} - ${err}`);
                    res.status(400).send(err);
                } else {
                    const message = "✅ Expense with given id deleted successfully";
                    // logger.success(message);
                    logFile.write(`\n${message}`);
                    res.status(200).send(message);
                }
            });
        }
    } catch (err) {
        // logger.error(error_message, err);
        logFile.write(`\n${error_message} - ${err}`);
        res.status(400).send(err);
    }
};

// Delete all expenses from the database
// <-- [ DO NOT PLAY WITH FIRE, KID ] -->
exports.deleteAllExpenses = (req, res) => {
    try {
        expenses = {};
        fs.writeFile(expense_path, JSON.stringify(expenses), (err) => {
            if (err) {
                // logger.error(error_message, err);
                logFile.write(`\n${error_message} - ${err}`);
                res.status(400).send(err);
            }
            const message = "✅ All expenses deleted successfully"; 
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(message);
        });
    } catch (err) {
        // logger.error(error_message, err);
        logFile.write(`\n${error_message} - ${err}`);
        res.status(400).send(err);
    }
};

// Create and Save a new expense
exports.getExpenseCategories = (req, res) => {
    try {
        if (Object.keys(expense_categories).length === 0) {
            const message = "❎ No categories to show";
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(expense_categories);
        } else {
            const message = "✅ Expense categories retrieved successfully";
            // logger.success(message);
            logFile.write(`\n${message}`);
            res.status(200).send(expense_categories);
        }
    } catch (err) {
        // logger.error(error_message, err);
        logFile.write(`\n${error_message} - ${err}`);
        res.status(400).send(err);
    }
};
