// 
var express=require('express')
var app=express()
// 接收get方式传输过来的数据通过   req.query
app.get('/',(req,res)=>{
    console.log(req.query)
    res.send('接收成功')
})
app.listen(3000)
// 