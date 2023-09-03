const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : process.env.user ,
        pass : process.env.pass  
    }
});

app.get('/', (req,res)=>{
    res.send('hello user');
})

app.post('/upload', async (req, res)=>{
    try{
        await mailTransporter.sendMail({
            from: process.env.from,
            to: process.env.to,
            subject: 'file uploaded!!',
            html: `<p>Name: ${req.body.username}</p>
            <p>Email: ${req.body.email}</p>
            <p>Description: ${req.body.description}</p>
            <p>Filename: ${req.body.filename}</p>`
        });
        }catch(err){
        console.log(err);
        }
})

app.post('/contact', async (req, res)=>{
    try{
        await mailTransporter.sendMail({
            from: process.env.from,
            to: process.env.to,
            subject: 'Contact!!',
            html: `<p>Name: ${req.body.username}</p>
            <p>Email: ${req.body.email}</p>
            <p>Message: ${req.body.message}</p>`
        });
    }catch(err){
        console.log(err);
    }
})

app.listen(4000, ()=>{
    console.log('server running');
});