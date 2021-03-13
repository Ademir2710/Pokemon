const express = require("express")

const model = require("../model/products")

var router = express.Router()

router.get("/", function(req, res, next){
    res.render("pokemon")
}) 


console.log("rodando arquivo")
module.exports = router
