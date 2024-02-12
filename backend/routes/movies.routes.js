const express = require("express")
const router = express.Router()

const {
    getPopular,
    getDetails,
    getNowPlaying
} = require("../controllers/movies.controllers")

router.get("/popular", getPopular)

router.get("/details/:id", getDetails)

router.get("/nowPlaying", getNowPlaying)

module.exports = router