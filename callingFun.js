function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcesser(apples,oranges){
    const applePiece = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

console.log(fruitProcesser(3,6));