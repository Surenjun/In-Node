const fs = require("fs");
let data = null;

try{
    data = fs.readFileSync("./test/fileForRead.txt" , "utf-8"); //同步的读取 读取完之后才执行后面的语句
    console.log("文件内容为:" + data);
}catch (err) {
    console.log(err)
}

//readFile异步读取
fs.readFile('./test/fileForRead.txt', 'utf8', function(err, data){
    if(err){
        return console.error('读取文件出错: ' + err.message);
    }
    console.log('文件内容: ' + data);
});

//通过文件流读取
const readStream = fs.createReadStream('./test/fileForRead.txt', 'utf8');
readStream
    .on('data', function(chunk) {
        console.log('读取数据: ' + chunk);
    })
    .on('error', function(err){
        console.log('出错: ' + err.message);
    })
    .on('end', function(){  // 没有数据了
        console.log('没有数据了');
    })
    .on('close', function(){  // 已经关闭，不会再有事件抛出
        console.log('已经关闭');
    });

//文件写入 writeFile / writeFileSync / createWriteStream

//检测文件是否存在
fs.access('./test/fileForRead.txt', function(err){
    if(err) throw err;
    console.log('fileForRead.txt存在');
});

// https://github.com/Surenjun/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/fs.md
