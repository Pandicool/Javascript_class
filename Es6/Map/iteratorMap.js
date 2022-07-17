let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + '- ' + value);
}

// using forEach method()
let map2 = new Map();
map2.set('name', 'Jack');
map2.set('age', '27');

// looping through Map
map2.forEach(function(value, key) {
  console.log(key + '- ' + value)
})