var admin = require("firebase-admin"); //Firebase Admin SDK

var serviceAccount = require("/home/pi/prodigyServ/YOURFIREBASEADMINSERVICEACCOUNTJSONHERE"); //Firebase Admin Service Account

var fireApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOURFIREBASEDATABASEURLHERE"
});

const express = require('express')
const app = express()
var messaging = fireApp.messaging();
const port = 2666 //Port to listen for web connections.
var endToken = 'YOURPANELFIREBASEMESSAGINGTOKEN' //Startup token for prodigy client

app.use(express.json()) // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!') //Debug Command
})

app.post('/', function (req, res) {
  console.log(req.body)
  if (req.body.type == "Batt") {
    messaging.send({token: endToken, data: {
      type: "batt",
      device: req.body.device,
      level: req.body.level.toString()
    }})
  }
  else {
    messaging.send({token: endToken, data: {
      type: "notification",
      device: req.body.device,
      app: req.body.app,
      title: req.body.title,
      message: req.body.message,
      //ticker: req.body.ticker.toString(),
      time: req.body.time.toString(),
      category: req.body.category,
      //addinfo: req.body.addinfo.toString,
      //persons: req.body.persons.toString()
    }})
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`) //Startup
})

 