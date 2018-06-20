// import 'babel-polyfill';

(function(){
    let a = 1;
    let b = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('兼容es6的api');
        },2000);
    })
    b.then(res=>{
       console.info(res);
    });
    console.info('webpack-server-dev编译成功，嘻嘻');
})();