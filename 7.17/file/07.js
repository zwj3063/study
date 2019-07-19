var http=require('http')
var fs=require('fs')
var fd=require('formidable')
var sd=require('silly-datetime')
var path=require('path')
http.createServer((req,res)=>{
    // 解决输出两次
    if(req.url=='/favicon.ico'){
        return
    }
    if(req.url=='/dopost'){
        var form=new fd.IncomingForm()
        // 更改上传文件的路径
        form.uploadDir='./upload'
        // console.log(form)
        form.parse(req,function(err,fields,files){
            // form.uploadDir='./upload'
            // fields  文本域    files 文件域
            var oldpath=files.pic.path
            var extname=path.extname(files.pic.name)
            var tt=sd.format(new Date(),'YYYYMMDDhhmmss')
            var newpath='upload/'+ tt + extname
            // console.log(files)
            // console.log(fields)    //表单传递的input数据
            fs.rename(oldpath,newpath,(err)=>{
                res.end('success')
            })
            // 获取
            // res.end('111')
        })
    }
}).listen(3000)