//child_process 模块提供了以与 popen(3) 类似但不相同的方式衍生子进程的功能。 此功能主要由 child_process.spawn() 函数提供：
const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['./c', 'my.bat']); //windows环境下

//我们可以控制子进程的输入流，并且监听它的输出流。我们也可以控制传递给潜在的操作系统命令的参数，我们可以通过那个命令的输出做我们想做的事情。
// 因为是以主进程为出发点，所以子进程的数据流与常规理解的数据流方向相反，stdin：写入流，stdout、stderr：读取流。

bat.stdout.on('data', (data) => {
    console.log(data.toString());
});
bat.stderr.on('data', (data) => {
    console.log(data.toString());
});

bat.on('exit', (code) => {
    console.log(`子进程退出码：${code}`);
});

/*异步创建子进程
    .exec()、.execFile()、.fork()底层都是通过.spawn()实现的。
    .exec()、execFile()额外提供了回调，当子进程停止的时候执行。*/

//exec
const {exec} = require('child_process');
// 成功的例子
exec('ls -al', function(error, stdout, stderr){
    if(error) {
        console.error('error: ' + error);
        return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + typeof stderr);
});

// 失败的例子
exec('ls hello.txt', function(error, stdout, stderr){
    if(error) {
        console.error('error: ' + error);
        return;
    }
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
});
/*{
    cwd: String,            子进程的当前工作目录。默认值: null
    env: Object,            环境变量的键值对。默认值: null
    encoding:String         默认值: 'utf8'
    timeout：默认是0。
    maxBuffer:Number        stdout 或 stderr 上允许的最大字节数。如果超过限制，则子进程将终止。默认是200*1024（200k）
    shell: Boolean,         用于执行命令的 shell
    uid: Number,            设置进程的用户标识
    gid: Number             设置进程的群组标识
}*/

//fork child_process.fork(modulePath[, args][, options])
//modulePath：子进程运行的模块。
/*参数说明：（重复的参数说明就不在这里列举）
    execPath： 用来创建子进程的可执行文件，默认是/usr/local/bin/node。也就是说，你可通过execPath来指定具体的node可执行文件路径。（比如多个node版本）
    execArgv： 传给可执行文件的字符串参数列表。默认是process.execArgv，跟父进程保持一致。
    silent： 默认是false，即子进程的stdio从父进程继承。如果是true，则直接pipe向子进程的child.stdin、child.stdout等。
    stdio： 如果声明了stdio，则会覆盖silent选项的设置。*/

const  child_process = require('child_process');
child_process.fork('./3.fs.js', {
    silent: false
});

// pipe 向父进程
child_process.fork('./3.fs.js', {
    silent: true
});

//去父进程拿取
const content = child_process.fork('./3.fs.js', {
    silent: true
});
content.stdout.setEncoding('utf8');
content.stdout.on('data', function(data){
    console.log("content的数据为" + data);
});

//另外一种写法
const child = child_process.fork('./5.child.js');
child.on('message', function(m){
    console.log('message from child: ' + JSON.stringify(m));
});
child.send({from: 'parent'});

//https://github.com/Surenjun/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/child_process.md
