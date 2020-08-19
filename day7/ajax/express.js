const express = require("express");
const fs = require("fs");
const bodyParser = require('body-parser');//解析,用req.body获取post参数


const app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  fs.readFile("ete.html", (err, data) => {
    res.send(data.toString());
  });
});

app.get("/woshiget", (req, res) => {
  console.log("get",req.query);
  res.json({ code: 200, msg: "少时诵诗书age", ...req.query });
});

app.post("/woshipost", (req, res) => {
  console.log("post",req.body);
  res.json({ code: 200, msg: "少时诵诗书post", ...req.body });
});

const server = app.listen("8085", () => {

  console.log("启动起来哒 访问这个地址==> http://localhost:8085,注意看F12的NetWork的XHR");
});
