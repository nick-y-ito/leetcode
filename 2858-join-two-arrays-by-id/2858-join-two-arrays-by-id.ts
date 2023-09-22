type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

type Obj = { id: number } & { [key in string]?: JSONValue };

function join(arr1: Obj[], arr2: Obj[]): Obj[] {
    const map = new Map<number, Obj>();

    for (const obj of arr1) {
        map.set(obj.id, obj);
    }

    for (const obj of arr2) {
        const id = obj.id;
        if (!map.has(id)) {
            map.set(id, obj);
        } else {
            const prevObj = map.get(id);
            map.set(id, { ...prevObj, ...obj });
        }
    }

    const arr = [...map.values()]
    return arr.sort((a,b) => a.id - b.id)

}
