var array = [5, 9, 6, 5, 3, 1]
var arrayLength = array.length
for (let i = arrayLength - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        // console.log(array[j], array[j + 1])
        if (array[j] > array[j + 1]) {
            let temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
        console.log(array)
    }
    console.log("-------")
}

console.log(array)