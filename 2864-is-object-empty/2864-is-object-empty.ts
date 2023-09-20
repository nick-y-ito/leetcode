type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    for (let x in obj) return false
    return true
    // if (Array.isArray(obj)) return !obj.length;
    // return !Object.keys(obj).length;
}
