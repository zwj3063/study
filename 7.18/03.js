// fs  文件系统    操作文件
var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    // 读文件
    // fs.readFile('./static/1.txt',(err,data)=>{
    //     res.end(data.toString())
    // })

    // // 在文件中写入
    // fs.writeFile('./static/1.txt',"我是要写入的内容",{flag:'a'},(err)=>{
    //     // 如果有错的话   抛出错误
    //     if(err){
    //         throw error
    //     }
    //     res.end('success')
    // })

    // 先读后写
    // fs.readFile('./static/1.txt')

    // copyFile    复制
    // fs.copyFile('./static/1.txt','./static/3.txt',(err)=>{
    //     res.end('success')
    // })

    // 改名   rename
    // fs.rename('./static/1.txt','./static/11.txt',(err)=>{
    //     res.end('success')
    // })

    // 删除一个文件   unlink
    // fs.unlink('./static/2.txt',(err)=>{
    //     res.end('success')
    // })

    // 目录   创建目录
    // fs.mkdir('./aa',(err)=>{
        // res.end('success')
    // })

    // 删除目录
    // fs.rmdir('./aa',(err)=>{
    //     res.end('success')
    // })

    // 读取目录
    // fs.readdir('./static',(err,data)=>{
    //     console.log(data)
    //     res.end()
    // })

    // 查看目录信息   stat
    // fs.stat('./static',(err,stats)=>{
    //     console.log(stats)
    //     // 是否是文件
    //     console.log(stats.isFlie)
    //     // 是否是目录
    //     console.log(stats.isDirectory)
    //     res.end()
    // })

    // 读取大文件时用的   流 =>   stream =>  文件流     createReadStream=>创建一个读取文件流   性能较好
    // 块   分批次接收数据
    // chunk=>相当于文件模块
    var stream=fs.createReadStream('./static/3.txt')
    var content=''
    // data  数据读取的过程     end   数据读取完成   事件
    stream.on('data',(chunk)=>{
        console.log(chunk)
        content+=chunk
        // console.log(content)
    })
    stream.on('end',(chunk)=>{
        console.log('数据加载完成'+content)
    })
    res.end()
}).listen(3000)
/*
从aa的文件夹中取出所有文件夹
for循环   let 

*/ 