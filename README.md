# nnmap (No nulls map)
A function for selectively mapping through arrays

- Just return null to exclude values from map
- Quit from map at any time

### No dependencies

### Usage:

```javascript
function returnIfEven(n: any): any | null {
  return (n % 2 === 0) ? n : null;
}

function quitIfThree(n: any): boolean {
  if (n === 3) return true;
  return false;
}

function quitOnThirdItem(n: any, index: number): boolean {
  if (index >= 3) return true;
  return false;
}

// skip nulls
const evenValues = nnmap([1, 2, 3, 4, 5, 6], returnIfEven); // [2, 4, 6]

// quit when value is 3
const quitWhenThree = nnmap([1, 2, 3, 4, 5]), (n) => n, quitIfThree); // [1, 2]

// map until the third index (maps indexes 0, 1, 2)
const firstThreeMappedItems = nnmap([1, 2, 3, 4, 5]), (n) => n, quitOnThirdItem); // [1, 2, 3]
```

---
#### API

* _**nnmap**_

Parameters
| Name          | type              | Description |
| ------------- |:-----------------:| ----------- |
| arr           | any[]             | The array to be mapped |
| cb            | Callback          | The mapping callback function |
| qcb?          | QuitCallback      | If this callback returns true, nnmap quits immediately |

```javascript
// example
const mappedArray = nnmap([]), (n) => n, (n, i) => null); 
```


**cb: Callback**

Whatever this callback returns is inserted in the resulting array

Parameters

| Name          | type              | Description |
| ------------- |:-----------------:| ----------- |
| currentItem   | any               | The current array item to map to a new value |

```javascript
(item) => item.foo
```

**qcb?: QuitCallback**

When this callback returns true, **nnmap** quits immediately and returns an array with the
values mapped up to this point

| Name          | type              | Description |
| ------------- |:-----------------:| ----------- |
| currentItem   | any[]             | The current array item to map to a new value |
| currentIndex  | number            | The current index being mapped |

```javascript
// quit based on the current value
(item) => item.quit === true;

// quit based on the current index
(item, index) => index > 10;
```
