const express = require("express");
const router = express.Router();
const controllers = require("../controllers/mt.controller");

// Require dotenv
require("dotenv").config();

// Import data from /app/data directory
const expenses = require("../data/expenses.json");
const expense_categories = require("../data/expense_categories.json");

// Import API URL from .env
const api_url = process.env.API_URL;

router.get("/", (req, res) => {
    res.render("index", { expenses, expense_categories, api_url });
});

router.get("/get-all-expenses", (req, res) => {
    controllers.getAllExpenses(req, res);
});

router.get("/get-all-categories", (req, res) => {
    controllers.getExpenseCategories(req, res);
});

router.get("/get-expense/:id", (req, res) => {
    controllers.findOneExpense(req, res);
});

router.post("/add-expense", (req, res) => {
    controllers.addOneExpense(req, res);
});

router.post("/update-expense/:id", (req, res) => {
    controllers.updateOneExpense(req, res);
});

router.post("/delete-expense/:id", (req, res) => {
    controllers.deleteOneExpense(req, res);
});

router.post("/delete-all-expenses", (req, res) => {
    controllers.deleteAllExpenses(req, res);
});

module.exports = router;
