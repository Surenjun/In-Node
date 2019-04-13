//url querystring bodyParser模块
const express = require('express');
const url = require("url");
const querystring = require("querystring");
const bodyParser = require('body-parser');

let app = express();
const urlencoded = bodyParser.urlencoded({extended: false}),
      json = bodyParser.json();

//或者
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

const router = express.Router();

const myLogger = function (req, res, next) { //中间件
    const urlObj =  url.parse(req.url, true);
    console.log(urlObj.query);
    // const urlStr = req.url.split("/");
    // let urlParams = urlStr[urlStr.length - 1].slice(2);
    // urlParams = querystring.parse(urlParams);
    // console.log(JSON.stringify(urlParams, null , 4)); //获取url的参数
    next();
};

router.post("/"  , [urlencoded,json] , function(req ,res) {
    console.log(req.body);
    res.end('Birds home page');
});

app.use([ myLogger ,router]);
app.listen(3000);
