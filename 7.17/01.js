var http=require('http');
var path=require('path')
http.createServer((req,res)=>{
    // path.resolve()    会将最后一个参数转换为绝对路径    webpack也会用到
    // var oldpath=path.resolve('./static/aa/bb')

    // path.normalize()    将路径格式化(变为标准格式)
    var oldpath=path.normalize('/aa/bb/cc')

    // path.extname()      获取文件的扩展名
    // var oldpath=path.extname('index.html')         //==> .html

    // path.format()     里面传入一个对象     将对象转转换为路径
    // dir 只能读到c盘    base会将dir覆盖掉
    // var oldpath=path.format({
    //     root:'',
    //     dir:'c:\a\b',
    //     base:'\d'
    // })

    console.log(oldpath)
    res.end()
}).listen(3000)