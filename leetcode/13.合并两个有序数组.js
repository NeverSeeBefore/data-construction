// https://www.nowcoder.com/practice/89865d4375634fc484f3a24b7fe65665?tpId=188&tqId=38564&rp=1&ru=%2Factivity%2Foj&qru=%2Fta%2Fjob-code-high-week%2Fquestion-ranking

// 描述
// 给出一个整数数组 和有序的整数数组 ，请将数组 合并到数组 中，变成一个有序的升序数组
// 注意：
// 1.可以假设 数组有足够的空间存放 数组的元素， 和 中初始的元素数目分别为 和 ，的数组空间大小为 + 
// 2.不要返回合并的数组，返回是空的，将数组 的数据合并到里面就好了
// 3.数组在[0,m-1]的范围也是有序的

// 例1:
// A: [4,5,6,0,0,0]，m=3
// B: [1,2,3]，n=3
// 合并过后A为:
// A: [1,2,3,4,5,6]

// 示例1
// 输入：
// [4,5,6],[1,2,3]

// 返回值：
// [1,2,3,4,5,6]

// 说明：
// A数组为[4,5,6]，B数组为[1,2,3]，后台程序会预先将A扩容为[4,5,6,0,0,0]，B还是为[1,2,3]，m=3，n=3，传入到函数merge里面，然后请同学完成merge函数，将B的数据合并A里面，最后后台程序输出A数组

// 示例2
// 输入：
// [1,2,3],[2,5,6]

// 返回值：
// [1,2,2,3,5,6]


// 合并到新的数组中
// function merge(A, m, B, n) {
//     // write code here
//     if (m <= 0) {
//         return B;
//     }
//     if (n <= 0) {
//         return A;
//     }
//     let aIndex = 0;
//     let bIndex = 0;
//     const res = [];
//     while (aIndex < m && bIndex < n) {
//         if (A[aIndex] < B[bIndex]) {
//             res.push(A[aIndex]);
//             aIndex++;
//         }
//         else {
//             res.push(B[bIndex]);
//             bIndex++;
//         }
//     }
//     aIndex < m && (res.push(...A.slice(aIndex, m)));
//     bIndex < n && (res.push(...B.slice(bIndex, n)));
//     return res;
// }

// console.log(
//     merge([1, 2, 3], 3, [2, 5, 6], 3)
// )
// console.log(
//     merge(
//         [4, 5, 6, 0, 0, 0], 3,
//         [1, 2, 3], 3
//     )
// )

// console.log(
//     merge(
//         [4, 5, 6], 3,
//         [1, 2, 3], 3
//     )
// )

// console.log(
//     merge(
//         [1, 2, 3], 3,
//         [4, 5, 6], 3
//     )
// )


// 合并到A中
function merge(A, m, B, n) {
    // write code here
    if (n <= 0) {
        return A;
    }
    let aIndex = m - 1;
    let bIndex = n - 1;
    let k = m + n - 1;
    while (aIndex >= 0 && bIndex >= 0) {
        if (A[aIndex] > B[bIndex]) {
            A[k] = A[aIndex];
            aIndex--;
        }
        else {
            A[k] = B[bIndex];
            bIndex--;
        }
        k--;
    }
    while (bIndex >= 0) {
        A[k] = B[bIndex];
        k--;
        bIndex--;
    }
    return;
}


// let A = [1, 2, 3, 0, 0, 0];
// let B = [2, 5, 6];
// merge(A, 3, B, 3);
// console.log(A);

// A = [4, 5, 6, 0, 0, 0];
// B = [1, 2, 3];
// merge(A, 3, B, 3);
// console.log(A);

// A = [4, 5, 6, 0, 0, 0];
// B = [1, 2, 3];
// merge(A, 3, B, 3);
// console.log(A);

// A = [1, 2, 3, 0, 0, 0];
// B = [4, 5, 6];
// merge(A, 3, B, 3);
// console.log(A);

A = [0];
B = [1];
merge(A, 0, B, 1);
console.log(A);

