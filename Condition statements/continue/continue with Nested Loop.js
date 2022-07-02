let n = 3, b= 2;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= b; j++) {
        if (j == 2) {
          continue;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// TC - O(n^2) -> n for both the array it need to be equal
// TC - O(n*b) -> both value are not same.
