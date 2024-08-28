const express = require("express")

const router = express.Router()

const verifyLogin = (req, res, next) => {
    console.log("logged in")
    next()
}

router.get("/", verifyLogin, (req, res) => {
    res.send("hello from /users")
})

module.exports = router