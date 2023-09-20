type Fn = (...params: any[]) => Promise<any>;

const timeLimit = (fn: Fn, t: number): Fn => {
    return (...args) => {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t)
            try {
                const result = await fn(...args);
                resolve(result);
            } catch (e) {
                reject(e);
            }
            // return fn(...args).then(resolve).catch(reject)
        });
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */