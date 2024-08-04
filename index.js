var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/MoneyList')
var db = mongoose.connection
db.on('error', ()=> console.log("Error while connecting to database"))
db.onjce('open', ()=> console.log("Connected to database"))

app.post("/add", (req, res) =>{
    var category_select = req.body.category_select
    var amount_input = req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input
})
app.get("/", (req, res) =>{

}).listen(5000)

console.log("Listening on port 5000")