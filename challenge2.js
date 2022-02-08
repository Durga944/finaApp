const creatImage = fnction(imgPath){
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img);
        })
        img.addEventListener('error',function(){
            reject(new Error('Image not found'))
        })
    })
}

let currentImg;

creatImage(`img/img-1.jpg`)
.then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
})
.then(()=>{
    currentImg.style.display = 'nine'
})

.catch(err => console.error();)