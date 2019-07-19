var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    fs.readdir('./static/aa',(err,data)=>{
        console.log(data)
        for(let i=0;i<data.length;i++){
            // console.log(data[i])
            fs.stat('./static/aa/' + data[i],(err,datas)=>{
                // console.log(datas)
                if(datas.isDirectory()){
                    console.log(data[i])
                }
            })
        }
        res.end('123')
    })
}).listen(3000)