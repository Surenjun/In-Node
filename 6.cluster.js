// node实例是单线程作业的在服务端编程中，通常会创建多个node实例来处理客户端的请求，以此提升系统的吞吐率。对这样多个node实例，我们称之为cluster（集群）。

// 在cluster模块中，主进程称为master，子进程称为worker。
const cluster = require('cluster');
const cpuNums = require('os').cpus().length;
const http = require('http');

if(cluster.isMaster){
    for(let i = 0; i < cpuNums; i++){
        cluster.fork();
    }
}else{
    http.createServer(function(req, res){
        res.end(`response from worker ${process.pid}`);
    }).listen(3000);
    console.log(`Worker ${process.pid} started`);
}

//1.master、worker如何通信？
/*  master进程通过 cluster.fork() 来创建 worker进程。
    cluster.fork() 内部 是通过 child_process.fork() 来创建子进程。*/

//2.如何实现端口共享
    //master进程监听特定端口，并将客户请求转发给worker进程。

//3.如何将请求分发到多个worker
/*  每当worker进程创建server实例来监听请求，都会通过IPC通道，在master上进行注册。当客户端请求到达，master会负责将请求转发给对应的worker。
    当有客户请求到达，master会轮询一遍worker列表，找到第一个空闲的worker，然后将该请求转发给该worker。*/

//master、worker内部通信
    //在开发过程中，我们会通过 process.on('message', fn) 来实现进程间通信。

//https://github.com/Surenjun/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/cluster.md
