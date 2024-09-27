export default function makeCounter(initialValue: number = 0): () => number {
    var count = initialValue - 1
    const counter = () => {
        count = count + 1
        return count
    }
    return counter
}

let counter = makeCounter()

console.log(counter())
console.log(counter())
console.log(counter())

counter = makeCounter(5)

console.log(counter())
console.log(counter())
console.log(counter())