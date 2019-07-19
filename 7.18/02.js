var http=require('http')
var fs=require('fs')
var art=require('art-template')
http.createServer((req,res)=>{
    var datas={
        list:["1","2","3"]
    }
    fs.readFile('./view/form.art',(err,data)=>{
        var str=data.toString()
        var result=art.render(str,datas)
        res.end(result)
    })
}).listen(3000)