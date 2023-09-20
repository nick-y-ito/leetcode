type Fn<T> = () => Promise<T>;

const promiseAll = <T>(functions: Fn<T>[]): Promise<T[]> => {
    return new Promise((resolve, reject) => {
        let resolvedCount = 0;
        const result: T[] = [];
        functions.forEach((f, i) => {
            f()
                .then((val) => {
                    resolvedCount++;
                    result[i] = val;
                    if (resolvedCount === functions.length) resolve(result);
                })
                .catch(reject);
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */