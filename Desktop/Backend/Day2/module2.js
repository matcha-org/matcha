console.log(module)
module.exports = {
    a: 1,
    b:4
}
console.log(module.exports)
let c = 56;
module.exports = c;
console.log(module.exports)