const PORT_NUMBER = 3000
const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + '/date.js')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'))
app.set("view engine", "ejs")

const items = ["Buy Food",
            "Cook Food",
            "Eat Food"]

const workItems = []

app.get("/", (req, res) => {
    res.render('list', {listTitle: date.getDate(), newListItem: items})
})

app.post("/", (req, res) => {

    const item = req.body.newItem
    if(req.body.list === 'Work Title') {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item)
        res.redirect("/")
    }
})

app.get("/work", (req, res) => {
    res.render('list', {listTitle: "Work Title", newListItem: workItems})
})

app.listen(PORT_NUMBER, () => {
    console.log("Server runs on port " + PORT_NUMBER)
})