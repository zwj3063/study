var http = require('http')
var ejs = require('ejs')
var fs = require('fs')
http.createServer((req, res) => {
    // fs.readFile('./static/index.ejs',(err,data)=>{
    // 数据
    var datas = {
        'list': [{
            name: "tom",
            age: 12
        }, {
            name: "tom",
            age: 12
        }]
    }
    // ejs  render渲染  模板  数据   complier  编译
    // 读取模板
    fs.readFile('./static/index.ejs', (err, data) => {
        // template  ejs模板
        var template = data.toString()
        console.log(template)
        var result = ejs.render(template, datas)
        res.end(result)
    })
    // })
}).listen(3000)