wait(1)
.then(()=>{
    console.log(`1 second passed`);
    return wait(1);
})

.then(()=>{
    console.log(`2 second passed`);
    return wait(1);
})

.then(()=>{
    console.log(`3 second passed`);
    return wait(1);
})

.then(()=>{
    console.log(`4 second passed`);
    return wait(1);
})

setTimeout(()=>{
    console.log(`1 second passed`);
    setTimeout(()=>{
        console.log(`2 second passed`);
        setTimeout(()=>{
            console.log(`3 second passend`);
            setTimeout(()=>{
                console.log(`4 second passed`);
            },1000)
        },1000)
    },1000)
},1000)
