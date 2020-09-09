const express = require('express')
const https =  require('https')
const app = express()
const bodyParser = require('body-parser')
const request = require('request')
const { response } = require('express')
const PORT_NUMBER = 3000

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/signup.html')
})

app.post('/subscribe', (req,res) => {
    console.log("Obtained form: ", req.body)

    const data = {
        members: [{
            email_address: req.body.inputEmail,
            status: "subscribed",
            merge_fields: {
                FNAME: req.body.firstName,
                LNAME: req.body.lastName
            }
        }]
    }

    const jsonData = JSON.stringify(data)
    const url = "" // Add your API URL
    const option = {
        method: 'POST',
        auth: "" // Add your Auth key
    }

    const request = https.request(url, option, (response) => {

        if(response.statusCode === 200) {
            res.sendFile(__dirname + '/success.html')
        } else {
            res.sendFile(__dirname + '/failure.html')
        }


        response.on("data", (data) => {
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData)
    request.end()
})

app.listen(PORT_NUMBER, () => {
    console.log('Server listening in port number '+ PORT_NUMBER)
});