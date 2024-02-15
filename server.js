require("dotenv").config();
const http = require("http");
const express = require("express");
const app = express();
const route = express.Router();
const bodyParser = require('body-parser');
const { start } = require("repl");
app.use(bodyParser.urlencoded({'extended':false}))
app.use(bodyParser.json())

route.get("/",(req,res,next)=>{
    res.status(200).json({
        'message':"data send",
        "data":"hello",
    });
});

route.post("/",(req,res,next)=>{
    const data = req.body
    console.log(data);

    res.status(200).json({
        "message":"data send",
        "data":data

    })
})

app.use(route);

http.createServer(app).listen(process.env.PORT,()=>{
    console.log("server start");
});