const positionLatX1 = 10;
const positionLongY1 = 20;


const addressLatX2 = 30;
const addressLongY2 = 10;



console.log(`Расстояние от точки А до точки Б`);
console.log(Math.sqrt(((addressLatX2 - positionLatX1) ** 2) + ((addressLongY2 - positionLongY1) ** 2)));
