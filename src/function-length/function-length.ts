export default function functionLength(fn: Function): number {
    return fn.length
}

function foo() {}

function bar(x) {}

function baz(x = 0, y = 1) {}

const fooLength = functionLength(foo)
const barLength = functionLength(bar)
const bazLength = functionLength(baz)

console.log(fooLength)
console.log(barLength)
console.log(bazLength)