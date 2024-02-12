const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const User = require("../models/User.model")

const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const saltRounds = 10;

const {
  signup,
  login,
  verify
} = require("../controllers/auth.controllers")


router.post("/signup", signup)

router.post("/login", login)

router.get("/verify", isAuthenticated, verify)


module.exports = router;
