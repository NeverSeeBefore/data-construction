// https://www.jianshu.com/p/2975c25e4d71

function add () {
    let _args = Array.prototype.slice.call(arguments);
    const _adder = function () {
        _args.push(...arguments);
        return _adder;
    };
    _adder.toString = function () {
        return _args.reduce((a, b) => a + b)
    }

    return _adder;

}

function myAdd (...args) {

    const adder = function (...rest) {
        args = args.concat(rest);
        return adder;
    }
    adder.toString = function () {
        return args.reduce((a, b) => a + b);
    }

    return adder;
}
console.log(myAdd(1,2,3,4,5));
console.log(myAdd(1,2,3,4,5) == 15);
console.log(myAdd(1,2,3,4,5) === 15);
console.log(Number(myAdd(1,2,3,4,5)))
console.log(Number(myAdd(1,2)(3,4,5)))
