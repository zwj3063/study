// cmd  amd区别
// cls全部清除
var http = require('http');
console.log(http)
http.createServer((req,res)=> {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});

    // 解决中文乱码
    // text/plain   文本
    // writeHead    写入响应头   文本类型  text/html  格式 utf-8
    // response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    console.log('hello node')

    console.log(req)

    // 发送响应数据 
    // response.end((1+2+3+4).toString());

    // 结束响应
    res.end('end')

}).listen(3000);
// listen   监听视口
// http.createServer((req,res)=>{
//     console.log(11)
//     // res.end(1)
// }).listen(3000,()=>{
//     console.log(11)
// })





// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');