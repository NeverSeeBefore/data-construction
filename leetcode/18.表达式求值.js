// https://www.nowcoder.com/practice/c215ba61c8b1443b996351df929dc4d4?tpId=188&&tqId=38548&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 描述
// 请写一个整数计算器，支持加减乘三种运算和括号。
// 示例1
// 输入：
// "1+2"

// 返回值：
// 3

// 示例2
// 输入：
// "(2*(3-4))*5"

// 返回值：
// -10

// 示例3
// 输入：
// "3+2*3*4-1"

// 返回值：
// 26

/**
 * 返回表达式的值
 * @param {string} s 待计算的表达式
 * @return int整型
 * 震惊 超过0%?
 */
function solve(s) {
    // 第一步：将 s 中缀表达式 转为 后缀表达式

    // 符号栈
    const options = [];

    // 后缀表达式栈
    const ss = [];
    for (let i = 0; i < s.length; i++) {
        // 空格 忽略
        if (s[i] === ' ') continue;
        // 数字 直接进入ss
        if (!isNaN(Number(s[i]))) {
            let curV = s[i];
            while( i < s.length - 1 && !isNaN(Number(s[i+1])) && s[i+1] !== ' ') {
                curV = Number(curV) * 10 + Number(s[i+1]);
                i ++;
            }
            ss.push(Number(curV));
        }
        // 以下为符号的判断
        // 符号栈为空 进入符号栈
        else if (options.length === 0) {
            options.unshift(s[i]);
        }
        // 遇到 括回，符号站出栈直到 括号
        else if (s[i] === ')') {
            let opt = options.shift();
            while (opt !== '(') {
                ss.push(opt);
                opt = options.shift();
            }
        }
        // 乘除
        else if (s[i] === '*') {
            while (options[0] === '*') {
                ss.push(options.shift());
                // options.unshift(s[i]);
            }
            options.unshift(s[i]);
        }
        else if (s[i] === '+' || s[i] === '-') {
            while (options[0] === '+' || options[0] === '-' || options[0] === '*') {
                ss.push(options.shift());
            }
            options.unshift(s[i]);
        }
        else {
            options.unshift(s[i]);
        }

    }

    while (options.length > 0) {
        ss.push(options.shift())
    }
    console.log(ss);
    // 第二步 计算后缀表达式
    const values = [];
    let count = ss.length * 2;
    while (ss.length && count) {
        count --;
        const curV = ss.shift();
        // 如果是运算符 那就计算
        switch (curV) {
            case '+':
                values.unshift(values.shift() + values.shift());
                continue;
            case '-':
                values.unshift(-values.shift() + values.shift());
                continue;
            case '*':
                values.unshift(values.shift() * values.shift());
                continue;
            default: 
                values.unshift(curV);
                continue;
        }
    }
    console.log('-', values);
    return values.shift();
}

// 遇到括回 出栈 一直到括号
// (1+2) * 3

// 当前运算符，如果栈顶是同级或高优先级， 栈顶出栈，当前进展
// 1 * 2 / 3 - 4 + 5

// 当前运算符，如果栈顶为低优先级，入栈
// 1 + 2 + 3 + 4 * 5 * 6

// 有括号
// 1 + 2 * 3 + 4 * （5 * 6 + 7 * 8）

// console.log(
//     solve("1+2") //12+
// ); //3
// console.log(
//     solve("(1+2) * 3") //12+3*
// ); // 9
// console.log(
//     solve("1 + 2 + 3 + 4 * 5 * 6") // 12+3+45*6*+
// ); // 126

// console.log(
//     solve("(2*(3-4))*5") // 234-*5*
// ); // -10
// console.log(
//     solve("3+2*3*4-1") // 323*4*+1-
// ); // 26
// console.log(
//     solve("1 + 2 * 3 + 4 * (5 * 6 + 7 * 8)") //123*+456*78*+*+
// ); // 351
// 1+ 6 + 4 * (30 + 56) = 7 + 4 * 86 = 344 + 7 = 351

console.log(
    solve('100+100')
)

// 带除法
// console.log(
//     solve("1 * 2 / 3 - 4 + 5") // 12*3/4-5+
// );
module.exports = {
    solve
}