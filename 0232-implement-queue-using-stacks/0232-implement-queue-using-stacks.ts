class MyQueue {
    s1: number[] = []
    s2: number[] = []
    front: number | null = null

    push(x: number): void {
        if (this.empty()) {
            this.front = x
            this.s1.push(x)
            return
        }
        if (this.s1.length === 0) { // s1 is empty
            while (this.s2.length > 0) {
                this.s1.push(this.s2.pop()!)
            }
        }
        this.s1.push(x)
    }

    pop(): number | void {
        if (this.empty()) return
        if (this.s2.length === 0) { // s2 is empty
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop()!)
            }
        }
        this.front = this.s2[this.s2.length - 2]
        return this.s2.pop()
    }

    peek(): number | null {
        return this.front
    }

    empty(): boolean {
        return this.s1.length === 0 && this.s2.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
