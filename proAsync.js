const prom1 = new Promise (function (resolve,reject){
    if(true){
        resolve('Durga!')
    }
    else{
        reject('Pragati')
    }
})

prom1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})



