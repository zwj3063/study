var http = require('http');
var url = require('url')
http.createServer((req,res) => {
    // 这个if语句是为了解决在命令中会输出两个undefined的情况
    if(req.url=='/favicon.ico'){
        return
    }
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    // 数据库里面存放的内容
    var admin={
        username:'admin',
        password:123456
    }
    var query=url.parse(req.url,true).query
    console.log(query)
    if(query.username==admin.username&&query.password==admin.password){
        res.end("登录成功")
    }else{
        res.end("登录失败")
    }
    // res.end()
    
}).listen(8080)