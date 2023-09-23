type MultiDimensionalArray = (number | MultiDimensionalArray)[]

const flat = (arr: MultiDimensionalArray, n: number): MultiDimensionalArray => {
    let result: MultiDimensionalArray = [...arr]
    for (let i = 0; i < n; i++) {
        let temp: MultiDimensionalArray = []
        result.forEach((e, i) => {
            if (Array.isArray(e)) {
                temp.push(...e)
            } else {
                temp.push(e)
            }
        })
        result = [...temp]
    }
    return result
}
