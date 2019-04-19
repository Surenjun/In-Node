//events模块是node的核心模块之一，几乎所有常用的node模块都继承了events模块，比如http、fs等

const EventEmitter  = require("events");

class Man extends EventEmitter {}

const man  = new Man();
// 注册事件监听器前，事件先触发，则该事件会直接被忽略
man.emit("wakeup");
man.on("wakeup",()=>{
    console.log("该起床了");
});
man.on("wakeup",(index)=>{
    console.log("该起床了+1" + "index:" + index);  //可以同时监听多个事件
});
man.once('wakeup', function(){
    console.log('该起床了(once)'); //只触发一次
});

//man.emit("wakeup");
function fn(){
    console.log(1);
}
man.on("fn",fn);
man.removeListener('fn',fn); //移除listen监听器
man.emit("fn",fn);
man.emit("wakeup" , 2);
