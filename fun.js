function logger(){
    console.log('My name is DUrga ');
}
logger();
logger();
logger();

function fruitProcesser(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges . `;
    return juice;
}

const appleJuice = fruitProcesser(5,0);
console.log(appleJuice);