const path = require("path");

const filepath = "/root/js/1.js";
//输出： /root/js
console.log( path.dirname(filepath));
// 输出：test.js
console.log( path.basename('/tmp/demo/js/test.js') );
// 输出：test
console.log( path.basename('/tmp/demo/js/test/') );
// 输出：test
console.log( path.basename('/tmp/demo/js/test') );
// 输出：test
console.log( path.basename('/tmp/demo/js/test.js', '.js'));
// 输出：.js
console.log( path.extname('/tmp/demo/js/test.js'));

//path.join
// 输出 '/foo/bar/baz/asdf'
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
//path.resolve 假设当前路径为F:/web/node

//输出 F:/web/node'
console.log( path.resolve('') );
//输出 F:/foo/bar/baz
console.log( path.resolve('/foo/bar', './baz') );
//输出 F:/tmp/file/
console.log( path.resolve('/foo/bar', '/tmp/file/') );
//输出 F:\Web\node\www\js\mod.js
console.log( path.resolve('www', 'js/upload', '../mod.js') );

//path.format
const p1 = path.format({
    root: '/tmp/',
    base: 'hello.js'
});
console.log( p1 ); // 输出 /tmp/hello.js

const p2 = path.format({
    dir: '/tmp',
    name: 'hello',
    ext: '.js'
});
console.log( p2 );  // 输出 /tmp/hello.js
