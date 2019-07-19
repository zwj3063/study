// var express=require('express')
// var fs=require('fs')
// var app=express()
// // 设置模板引擎
// // engine  引擎
// // 设置模板引擎为ejs
// app.set('view engine','ejs')
// // 指定模板的具体目录
// app.set('views',__dirname+'/views')
// app.get('/',(req,res)=>{
//     // express  包含ejs  res=>render
//     // var list=['1','2','3']
//     // fs.readFile('./view/index.ejs',(err,data)=>{
//         res.render('index',{list:['1','2','3']})
//     // })
// })
// app.listen(3000)



var express=require('express')
var fs=require('fs')
var app=express()
// 设置模板引擎
// engine  引擎
// 设置模板引擎为ejs
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    // express  包含ejs  res=>render
    // var list=['1','2','3']
    // fs.readFile('./view/index.ejs',(err,data)=>{
        res.render('index.ejs',{list:['1','2','3']})
    // })
})
app.listen(3000)