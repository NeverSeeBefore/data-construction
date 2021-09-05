// https://www.nowcoder.com/practice/840dd2dc4fbd4b2199cd48f2dadf930a?tpId=188&&tqId=38567&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking

const { createTree } = require("./utils");

// 给定一个二叉树和一个值\ sum sum，请找出所有的根节点到叶子节点的节点值之和等于\ sum sum 的路径，
// 例如：
// 给出如下的二叉树，\ sum=22 sum=22，
// 返回
// [
//     [5, 4, 11, 2],
//     [5, 8, 9]
// ]

//          5
//        /   \
//      4       8
//    /   \       \
//  1      11       9
//        /   \
//      2       7
const tree = createTree([5, 4, 8, 1, 11, '#', 9, '#', '#', 2, 7]);

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


module.exports = {
    pathSum1
}




/**
 * 和制定值的 路径   可以是非叶子节点；
 * @param {TreeNode} root TreeNode类
 * @param {number} sum int整型
 * @return int整型二维数组
 */
function pathSum1(root, sum) {
    // write code here
    const curValue = root.val;
    if (curValue === sum) {
        return [[curValue]];
    }
    if (curValue > sum) {
        return [];
    }
    const tempRes = [];
    root.left && pathSum1(root.left, sum - curValue).forEach(res => {
        res.unshift(curValue)
        tempRes.push(res);
    })
    root.right && pathSum1(root.right, sum - curValue).forEach(res => {
        res.unshift(curValue);
        tempRes.push(res);
    })
    return tempRes;
}
// console.log(
//     pathSum1(tree, 22)
// );


/**
 * 和制定值的 路径   必须是根节点到叶子节点
 * @param {TreeNode} root TreeNode类
 * @param {number} sum int整型
 * @return int整型二维数组
 */
function pathSum2(root, sum) {
    if (root === null) {
        return [];
    }
    const curValue = root.val;
    // 对于叶子节点，
    if (root.left === null && root.right === null) {
        // 只要当前的值是目标值，说明路径满足
        if (curValue === sum) {
            return [[curValue]];
        }
        // 不管是大了还是小了 都是不满足的情况
        return [];
    }
    const tempRes = [];
    root.left && pathSum2(root.left, sum - curValue).forEach(res => {
        res.unshift(curValue);
        tempRes.push(res);
    });
    root.right && pathSum2(root.right, sum - curValue).forEach(res => {
        res.unshift(curValue);
        tempRes.push(res);
    })
    return tempRes;
}

console.log(
    pathSum2(tree, 22)
);
console.log(
    pathSum2(createTree([1,2]), 1)
);
console.log(
    pathSum2(createTree([1,2]), 3)
);
