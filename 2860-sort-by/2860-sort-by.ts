type JSONValue =
    | null
    | boolean
    | number
    | string
    | JSONValue[]
    | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number;

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    let sortedArr: JSONValue[] = [];
    for (let a of arr) {
        const newNum = fn(a);
        const i = sortedArr.findIndex((s) => newNum < fn(s));
        if (i === -1) {
            sortedArr.push(a);
        } else {
            const after = sortedArr.splice(i, sortedArr.length - i, a);
            sortedArr.push(...after);
        }
    }
    return sortedArr;
}

// fn(a) = 17
// i = 3
// before = [3,9,15]
// after = [35,52,89,102]
// [3, 9, 15, 35, 52, 89, 102]
const fn = (x: any) => x;
const arr = [52, 9, 15, 89, 3, 102, 35];
console.log(sortBy(arr, fn));
