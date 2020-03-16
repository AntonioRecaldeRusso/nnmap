# nnmap (No nulls map)
A function for selectively mapping through arrays

- Just return null to exclude values from map
- Quit from map at any time

### No dependencies

### Usage:

```javascript
function returnIfEven(n: number): number | null {
  return (n % 2 === 0) ? n : null;
}

function isThree(n: number): boolean {
  if (n === 3) return true;
  return false;
}

// skip nulls
const evenValues = nnmap([1, 2, 3, 4, 5, 6], returnIfEven); // [2, 4, 6]

// quit when value is 3
const quitWhenThree = nnmap([1, 2, 3, 4, 5]), returnIfEven, isThree); // [1, 2]
```

