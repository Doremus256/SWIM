var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    // bark.all(function (data) {
    //     var hbsObject = {
    //         barks: data
    //     };
        res.render("views");
    // });
});




module.exports = router;