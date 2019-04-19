//process是node的全局模块，作用比较直观。可以通过它来获得node进程相关的信息，比如运行node程序时的命令行参数。或者设置进程相关信息，比如设置环境变量。
//process.stdout  process.stderr
//环境变量 process.env
    if(process.env.NODE_ENV === 'production'){
        console.log('生产环境');
    }else{
        console.log('非生产环境');
    }

//process.nextTick(fn)
    //process.nextTick(fn) 将 fn 放到 node 事件循环的 下一个tick 里；
    //process.nextTick(fn) 比 setTimetout(fn, 0) 性能高；
    console.log('海贼王');
    process.nextTick(function(){
        console.log('火影忍者');
    });
    console.log('死神');

//process.argv 获取命令行参数
    // 元素1：node
    // 元素2：可执行文件的绝对路径
    // 元素x：其他，比如参数等
process.argv.forEach(function(val, index, array) {
    console.log('参数' + index + ': ' + val);
});

//process.cwd() 返回当前工作路径
console.log(process.cwd());

//process.kill() 向进程发送信号

//https://github.com/Surenjun/nodejs-learning-guide/blob/master/模块/process.md
