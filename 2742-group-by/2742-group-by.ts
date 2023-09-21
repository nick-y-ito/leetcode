declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>;
    }
}

Array.prototype.groupBy = function<T>(fn: (item: T) => string) {
    const result: Record<string, T[]> = {};
    this.forEach((item: T) => {
        const key = fn(item);
        result[key] = result[key] || []
        result[key].push(item);
    });
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

export {};
