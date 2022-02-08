navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.error(err)
);

const getPosition = function(){
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.error(err)
        );
        

    });
};
