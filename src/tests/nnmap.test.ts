import nnmap from '../lib/nnmap';
import isEqual from 'lodash/isEqual';

const testArray = [1, 2, 3, 4, 5];
const QUIT_INDEX = 0;
const QUIT_VALUE = 3;

function multiplyByTwo(n: number): number {
  return n * 2;
}

function returnNumberUnchanged(n: number): number {
  return n;
}

function multiplyEvenByTwo(n: number): number | null {
  if (n % 2 === 0) return multiplyByTwo(n);
  return null;
}

function isEven(n: number): boolean {
  if (n % 2 === 0) return true;
  return false;
}

function quitByValueCallback(arrayItem: number, currIndex: number): boolean {
  if (arrayItem === QUIT_VALUE) return true;
  return false;
}

function quitByIndexCallback(arrayItem: number, currIndex: number): boolean {
  if (currIndex === QUIT_INDEX) return true;
  return false;
}


test('multiply each item by two', () => {
  const expected = [2, 4, 6, 8, 10];
  const mapResult = nnmap(testArray, multiplyByTwo);
  const arraysAreEqual = isEqual(expected, mapResult);

  expect(arraysAreEqual).toBe(true);
});

test('multiply even numbers by two, ignore odd numbers by returning null', () => {
  const expected = [4, 8];
  const mapResult = nnmap(testArray, multiplyEvenByTwo);
  const arraysAreEqual = isEqual(expected, mapResult);

  expect(arraysAreEqual).toBe(true);
});

test('return empty array when array parameter is empty', () => {
  const SIZE_EMPTY = 0;
  const mapResult = nnmap([], multiplyByTwo);

  expect(mapResult).toBeInstanceOf(Array);
  expect(mapResult.length).toBe(SIZE_EMPTY);
});

test('quits when quit-by-index callback returns true', () => {
  const expected = testArray.slice(0, QUIT_INDEX + 1);
  console.log('expected', expected);
  const mapResult = nnmap(testArray, returnNumberUnchanged, quitByIndexCallback);
  console.log('mapResult', mapResult);
  const arraysAreEqual = isEqual(expected, mapResult);
  
  expect(arraysAreEqual).toBe(true);
});

test('quits when quit-by-value callback returns true', () => {
  const expectedIndex = testArray.findIndex((n) => n === QUIT_VALUE);
  const expected = testArray.slice(0, expectedIndex + 1);
  const mapResult = nnmap(testArray, returnNumberUnchanged, quitByValueCallback);
  const arraysAreEqual = isEqual(expected, mapResult);
  
  expect(arraysAreEqual).toBe(true);
});

test('boolean -false- not ignored by nnmap', () => {
  const expected = [false, true, false, true, false];
  const mapResult = nnmap(testArray, isEven);
  const arraysAreEqual = isEqual(expected, mapResult);

  expect(arraysAreEqual).toBe(true);
});

