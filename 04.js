// url
var http=require('http')
// fs=file system  文件系统
var fs=require('fs')
http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url=='/red'){
        fs.readFile('./static/red.html',(err,data)=>{
            res.end(data)
        })
    }else if(req.url=='/green'){
        fs.readFile('./static/green.html',(err,data)=>{
            res.end(data)
        })
    }
}).listen(3000)