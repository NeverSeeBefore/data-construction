// https://www.nowcoder.com/practice/bb1615c381cc4237919d1aa448083bcc?tpId=188&&tqId=38606&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

// 给你一个文本串S，一个非空模板串T，问S在T中出现了多少次

// 示例1
// 输入：
// "ababab","abababab"
// 返回值：
// 2

// 示例2
// 输入：
// "abab","abacabab"
// 返回值：
// 1

// 空间O(n)时间O(n)的算法

/** 
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算模板串S在文本串T中出现了多少次
 * @param S string字符串 模板串
 * @param T string字符串 文本串
 * @return int整型
 */
function kmp(S, T) {
    const lengthS = S.length;
    const lengthT = T.length;
    // write code here
    if (lengthS > lengthT || lengthT === 0) {
        return 0;
    }

    // S[j] 不匹配时，j应该会退的到的位置；
    const next = new Array(lengthS + 1).fill(-1);
    next[0] = 0;
    next[1] = 0
    const getNext = function (j) {
        if (next[j] !== -1) {
            return next[j];
        }
        let childStrLen = j - 1;
        next[j] = 0;
        while (childStrLen > 0) {
            if (S.substr(0, childStrLen) === S.substr(j - childStrLen, childStrLen)) {
                next[j] = childStrLen;
                return next[j];
            }
            childStrLen --;
        }
        return next[j];
    };

    // S 在 T 中出现的次数
    let count = 0;

    // 匹配串的索引
    let i = 0

    // 模式串索引
    let j = 0;
    while (i < lengthT && (lengthT - i >= lengthS - j) ) {

        // 如果匹配，继续向后走
        if (T[i] === S[j]) {
            i++;
            if (++j === lengthS) {
                j = getNext(j);
                count++;
            }
        }

        else if (j === 0) {
            i ++;
        }

        // 出现不匹配，计算回退位置
        else {
            j = getNext(j);
        }
    }
    return count;
}

console.log(
    kmp("ababab", "abababab")
);
// 0 0 1 2 3 3 4
console.log(
    kmp("abab", "abacabab")
);

module.exports = {
    kmp: kmp
};