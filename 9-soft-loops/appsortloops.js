const arr = [1, 40, -5, 10, 0, 80, 70, 50, -20, -2, 18];
console.log(arr);

function sortFunctions(item) {
    let [...newArray] = item;
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i; j < newArray.length; j++) {

            if (newArray[j] < newArray[i]) {
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
        }
    }
    return newArray;

}

console.log(sortFunctions(arr));
console.log(arr);
