// require  和import   区别？
var http=require('http')
// fs=file system  文件系统
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // response.writeHead(200, {'Content-Type': 'text/html;charset=UTF8'});
    fs.readFile("./static/1.txt",(err,data)=>{
        res.end(data)
    })
}).listen(3000)