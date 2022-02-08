const getCountryData = function(country){
    fetch(`https://www.w3schools.com/js/js_api_fetch.asp ${country}`)
    .then(function(response){
        console.log(response);
        return response.json()
    })
    .then(function(data){
        console.log(data);
        renderCountry(data[0]);
    });
};
getCountryData('portugal');