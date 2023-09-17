type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const filteredArr: number[] = [];
    arr.forEach((n: number, i: number) => {
        fn(n, i) && filteredArr.push(n);
    })
    return filteredArr;
};