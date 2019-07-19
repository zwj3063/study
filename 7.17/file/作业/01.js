// 引入服务器模块
var http=require('http')
var url = require('url')
http.createServer((req,res)=>{
    // 这个if语句是为了解决在命令中会输出两个undefined的情况
    if(req.url=='/favicon.ico'){
        return
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    var query=url.parse(req.url,true).query
    console.log(query.number)
    var number=query.number
    var user=query.user
    if(query.user=='teacher'){
        res.end(user+'的工号是'+number)
    }else if(query.user=='student'){
        res.end(user+'的工号是'+number)
    }
}).listen(5000)