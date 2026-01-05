// modules
const express = require("express")
const { get } = require("node:http")
const path = require("path")

// code
let app = express()
app.listen(3000, () => {
    console.log("servidor iniciado | porta: 3000")
}) // local host 
app.use(express.static(
    path.join(__dirname, "public")
))
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "views", "index.html")
    )
})
app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "views", "404.html")
    )
})