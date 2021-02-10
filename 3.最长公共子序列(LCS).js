// LCS :  Longest Common String
// 字符串1: 邓哥是渡一的吉祥物，也是全人类的好朋友
// 字符串2: 面对挑战，绝不率先使用邓哥，是渡一对世界的承诺
// 得到两个字符串的最长公共子序列   邓哥是渡一的

// 例
// const str1 = '3abcde';
// const str2 = 'a3c5';
// 最长: ac
// 分析
// 1. 第一位相同，第一位进入最长子序列，
// 2. 第一位不同
//      1. 去掉字符串1的首位，继续和2比较
//      2. 去掉字符串2的首位，继续和1比较

let num = 0;
// 动态规划
function LCS (str1, str2) {
    const cache = [];
    function _LCS(str1, str2) {
        if (str1 === '' || str2 === '') return '';
        // 遍历缓存
        for (let i = 0; i < cache.length; i++) {
            const item = cache[i];
            if (item.str1 === str1 && item.str2 === str2) {
                return item.result;
            }
        }
        num ++;
        let result;
        if (str1[0] === str2[0]) {
            result = str1[0] + _LCS(str1.substr(1), str2.substr(1));
        } else {
            const res1 = _LCS(str1.substr(1), str2);
            const res2 = _LCS(str1, str2.substr(1));
            result = res1.length > res2.length ? res1 : res2;
        }
        cache.push({
            str1,
            str2,
            result
        })
        return result;
    }

    return _LCS(str1, str2);
}

// console.log(
//     LCS('3abcde', 'a3c5')
// );
console.log(
    LCS('邓哥是渡一的吉祥物，也是全人类的好朋友', '面对挑战，绝不率先使用邓哥，是渡一对世界的承诺')
);
console.log(num);