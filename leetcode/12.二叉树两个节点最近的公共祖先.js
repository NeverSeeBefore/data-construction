
// https://www.nowcoder.com/practice/e0cc33a83afe4530bcec46eba3325116?tpId=188&&tqId=38564&rp=1&ru=/activity/oj&qru=/ta/job-code-high-week/question-ranking
// 描述
// 给定一棵二叉树(保证非空)以及这棵树上的两个节点对应的val值 o1 和 o2，请找到 o1 和 o2 的最近公共祖先节点。
// 注：本题保证二叉树中每个节点的val值均不相同。
// 示例1
// 输入：
// [3,5,1,6,2,0,8,#,#,7,4],5,1

// 返回值：
// 3








const { createTree } = require("./utils");




/**
 * 
 * @param root TreeNode类 
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
    // write code here
    const _firstRootSearch = function (root, o1, o2) {
        if(root.val === null) {
            return root;
        }
        if (root.val === o1 || root.val === o2) {
            return root;
        }
        const leftRes = root.left && _firstRootSearch(root.left, o1, o2);
        const rightRes = root.right && _firstRootSearch(root.right, o1, o2);
        if (leftRes === null) {
            return rightRes;
        }
        if (rightRes === null) {
            return leftRes;
        }
        return root;
    }
    return _firstRootSearch(root, o1, o2);
}

const root = createTree([3, 5, 1, 6, 2, 0, 8, '#', '#', 7, 4]);
console.log(root);
console.log(
    lowestCommonAncestor(root, 5, 2)
);
