const Koa = require("koa");
const app = new Koa();

app.use(async (ctx , next)=>{
    await next();
    console.log(1);
    ctx.body = "1"
});

app.use(async (ctx , next)=>{
    await next();
    console.log(2);
    ctx.body = "2"
});

app.use(async (ctx , next)=>{
    await next();
    console.log(3);
    ctx.body = "3"
});
app.listen(3000); //=> 3 3 2 2 1 1
