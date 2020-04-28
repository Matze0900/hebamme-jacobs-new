const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
var mail = require("nodemailer");
var xoauth2 = require('xoauth2');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 3000;
const log = console.log;

app.use(express.static("public"));
//data parsing

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post('/email', (req, res) => {
    res.json({ message: 'Message received' })
    console.log(req.body);
    sendEmail(req.body);
});

app.listen(PORT, () => log(__dirname), 3000);

let sendEmail = function(data) {
    var transp = mail.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secureConnection: true,
        auth: {
            user: "emailservicejacobs@gmail.com",
            pass: "mfg.prim235"
        }
    });
    transp.sendMail({
            to: "m.bloemker93@web.de",
            subject: "Test",
            text: "Versendet mit Nodemailer"
        },
        function(err, response) {
            if (err) {
                console.log(err);
            }
            console.log(response);
        });
};