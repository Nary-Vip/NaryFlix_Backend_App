const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require('dotenv/config'); //DB_CONNECTION
const path = require('path');


//Mongo Connect
let mongoUrl = process.env.DB_CONNECTION;
mongoose.connect(mongoUrl, ()=>{
    console.log("Mongo Connected");
    app.listen(5500, ()=>{
        console.log("Server initiated at http://localhost:5500")
    });
});

//Express App
const app = express();


app.get("/", (req, resp)=>{
    resp.sendFile(__dirname+"/static/index.html");
})

app.get("/signinAdd" , (req, resp)=>{
    const blog = new Blog({
        username: "NareVip",
        password: "Mannn"
    })

    blog.save()
    .then((result)=>{
        resp.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get("/hacked" , (req, resp)=>{
    Blog.find()
    .then((res)=>{
        resp.send(res)  
    })
})

