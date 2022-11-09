const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv")
const router = require("./server/routes/router")
dotenv.config({
    path:"config.env"
})
const PORT = process.env.PORT || 8080

app.set("view engine", "ejs")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use(router)

app.listen(PORT, () => console.log("Server running on port", PORT))



