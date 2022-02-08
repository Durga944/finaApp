const whereAmI = function(lat ,lng){
    fetch(`https://www.w3schools.com/js/js_api_fetch.asp ${lat},${lng}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        console.log(`Yoi are in ${data.city} ,${data.country}`);
    })
    .catch(err => console.log(`${err.message}`);)
}
whereAmI(52.508, 13.381);
whereAmI(52.508, 13.381);
whereAmI(52.508, 13.381);
