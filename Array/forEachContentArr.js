function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices.forEach(printElements);