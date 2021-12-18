
// [3,5,1,6,2,0,8,#,#,7,4]
//     3
//   5   1
//  6 2 0 8
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function LinkNode(x) {
    this.val = x;
    this.next = null;
}

/**
 * 根据节点生成树结构
 * @param {Array}} arr 完全二叉树层序遍历数组
 * @returns 树的根节点
 */
function createTree(arr) {
    const root = new TreeNode(arr[0]);
    const nodeList = [root];

    for(var i = 1; i< arr.length; i ++) {
        // # 代表空节点
        if (arr[i] === '#') {
            nodeList.push(null);
            continue;
        }
        // i / 2 代表 父节点是第i个数；
        // (i / 2) - 1 代表父节点的索引；
        const parent = (i - 1) / 2 >> 0;
        const isLeft = i % 2 === 1;
        const node = new TreeNode(arr[i]);
        // console.log(i, arr[i], parent, isLeft);
        isLeft ? nodeList[parent].left = node : nodeList[parent].right = node;
        nodeList.push(node);
    }
    // console.log(nodeList);
    return root;
}
// console.log(
//     createTree([3,5,1,6,2,0,8,'#','#',7,4])
// );

function createLink(arr) {
    if (arr.length === 0) {
        return null;
    }
    const head = new LinkNode(arr[0]);
    for(let i = 1; i < arr.length; i ++) {
        head.next = new LinkNode(arr[i]);
    }
    return head;
}

module.exports = {
    createTree,
    createLink
}


// console.log(
//     createLink([1,2])
// )