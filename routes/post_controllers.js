var express = require("express");

var router = express.Router();

// Import the model (bark.js) to use its database functions.
var bark = require("../models/bark.js");

// Create all our routes and set up logic within those routes where required..

// GET // - FOR DISPLAYING ALL BARKS CREATED WITHIN NEWSFEED 
router.get("/", function (req, res) {
    bark.all(function (data) {
        var hbsObject = {
            barks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// POST //
router.post("/api/barks", function (req, res) {
    bark.create([
        "user_name", "body"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back the ID of the new burger
        res.json({ id: result.insertId });
    });
});

// PUT //
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// DELETE //
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;