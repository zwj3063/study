// 搭建静态资源服务器
var express=require('express')
var app=express()
var path=require('path')
// express.static()   使用静态资源
// app.use()   可以使用中间件   插件
console.log(__dirname)
var publicpath=path.resolve(__dirname,'public')
// 使用静态资源服务器
console.log(publicpath)
app.use(express.static(publicpath))
app.listen(3000)