//fs

const fs = require("fs");
fs.createReadStream("./5.child.js").pipe(process.stdout);

//node.js中，有四种stream类型
    /*Readable：用来读取数据，比如 fs.createReadStream()。
    Writable：用来写数据，比如 fs.createWriteStream()。
    Duplex：可读+可写，比如 net.Socket()。
    Transform：在读写的过程中，可以对数据进行修改，比如 zlib.createDeflate()（数据压缩/解压）。*/

//1.Readable Stream
    //http.IncomingRequest fs.createReadStream() process.stdin

    const readStream = fs.createReadStream("./test/fileForRead.txt");
    let content = "";

    readStream.on("data",chunk =>{
        content += chunk;
    });
    readStream.on("end",chunk =>{
        console.log("文件读取完成，文件为" , content)
    });

    //使用pipe
    //fs.createReadStream('./test/fileForRead.txt').pipe(process.stdout);

    //另外一种方式
    process.stdout.write("[");
    readStream.pipe(process.stdout);
    readStream.on("end",()=>{
        process.stdout.write("]");
    });
