const fs = require('fs').promises;
const http=require('http');
const url=require("url");

const hostName="127.0.0.1";
const port="3500";

console.log("preparing server ");

const server=http.createServer((req,res)=>{
    console.log("recieved request" + req.url);
    console.log("request:"+req.url);
    if(req.url==="/")
    {
        fs.readFile("index.html").then((content)=>{
            console.log("reading index file");
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(content);
        })
    }
    else if(req.url==="/about")
    {
        fs.readFile("about.html").then((content)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(content);
        })
    }
    else if(req.url==="/course")
    {
        fs.readFile("course.html").then((content)=>{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(content);
        })
    }

});

server.listen(port, hostName, ()=>{
    console.log("Server running" + port);
});