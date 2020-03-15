# nnmap
A function for selectively mapping through arrays

### No dependencies

### Usage:

```javascript
const myArray = [1,2,3,4,5];

// normal map through array
const result = nnmap(myArray, (n) => n); // [1, 2, 3, 4, 5]

// map and ignore some values (example ignores odd numbers)
const onlyEven = nnmap(myArray, (n) => {
  if (n % 2 === 0) return n;
  return null; // returning null will not push any value to the resulting array
}); // [2, 4]

// map and use a callback to quit at any time
const someValues = nnmap(
  myArray,
  (n) => n * 2,
  (n, index) => { if (n == 3) return true }; // ...return true at any time to quit
); // [1]
```

