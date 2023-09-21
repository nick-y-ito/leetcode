type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    const result: Obj[][] = [];
    let subarr: Obj[] = [];
    arr.forEach((e, i) => {
        subarr.push(e);
        if (subarr.length >= size || i === arr.length - 1) {
            result.push(subarr)
            subarr = []
        }
    })
    return result;
};
