var express=require('express')
var cookieParser=require('cookie-parser')
var app=express()
// 参数表示加密的随机字符串
app.use(cookieParser('sign'))
// domain  域名    httpOnly   true   false   MaxAge  有效期    size  大小    Expeies  过期时间
app.get('/',(req,res)=>{
    res.send('首页')
})
// 设置中间件
app.use(cookieParser('123456'));
// 设置cookie
// httpOnly  防止xss攻击
app.get('/set',(req,res)=>{
    res.cookie('username','tom',{maxAge:200000,signed:true,httpOnly:true})
    res.send('cookie设置成功')
})
// 读取cookie
app.get('/get',(req,res)=>{
    var name=req.signedCookies.username
    console.log(name)
    res.send('读取成功'+name)
})
app.listen(3000)