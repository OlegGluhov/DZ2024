const arr = [1, 40, -5, 10, 0, 80, 70, 50, -20, -2, 18];


//Подсмотрел в гугле!!!!
//Сам не додумался по какой методите расставить в массиве



function sortFunctions(item) {
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item.length; j++) {
            // if (item[i] < item[j]) {
            //     let t = item[i];                        //Один из вариантов
            //     item[i] = item[j];
            //     item[j] = t;
            // }

            if (item[j] > item[i]) {
                [item[i], item[j]] = [item[j], item[i]];
            }
        }
    }
    return item;
}
console.log(sortFunctions(arr));
