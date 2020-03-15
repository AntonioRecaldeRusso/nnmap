type Callback = (item: any) => any;
type QuitCallback = (item: any) => boolean;

function defaultQCB(item: any) {
  return false;
}

export default function nnmap(arr: Array<any>, cb: Callback, qcb: QuitCallback = defaultQCB) {
  const returnedArray: Array<any> = [];
  let value: any = null;

  for (let i = 0; i < arr.length; i++) {
    value = cb(arr[i]);
    if (value) returnedArray.push(value);
    if (qcb(arr[i])) break;
  }
  return returnedArray;
}
