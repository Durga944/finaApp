const promise1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise1');
        resolve('Hyy');
    },500);
});


const promise2 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise2');
        resolve('Hello');
    },1000);
});

Promise.all([promise1,promise2])
    .then((values)=>{
        console.log('everything resolved');
        console.log(values);

    })
    .catch((reason)=>{
        console.log('one failed');
        console.log(reason);
    });



