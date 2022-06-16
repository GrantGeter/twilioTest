const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = 3000;

app.get('/done', (req, res) => {
    sendSms('+19363919324', "It's done Masa");
    res.status(201).send({
        message: "sent!" 
    })
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;