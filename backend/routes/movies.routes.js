const express = require("express")
const router = express.Router()

const {
    getPopular
} = require("../controllers/movies.controllers")

router.get("/popular", getPopular)

module.exports = router