const express = require("express")
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log("middleware in ~/index.js")
    next()
})

app.use("/api", require("./api"))

app.get("/", (req, res) => {
    console.log(json)
    res.send("hello")
})

app.get("/todos", async (req, res, next) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const json = await response.json()
        res.send(json)
    }catch(err){
        next(err)
    }
    res.send("hello")
})

app.use((error, req, res, next) => {
    console.log("ERROR", error)
    res.send({
        message: error.message,
    })
})

app.listen(8080, () => {
    console.log("server running")
})