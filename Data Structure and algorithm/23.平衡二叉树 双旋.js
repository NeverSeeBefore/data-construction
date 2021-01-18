//         a
//        /
//       b
//      /
//     c
//    /
//   d
//  /
// e

// 不平衡二叉树 转换 为 平衡二叉树
// 左单旋：左边浅，右边深时
    // 旋转节点：当前不平衡的节点
    // 新根： 右子树的根节点
    // 变化分支： 旋转节点的右子树的左子树
    // 不变分支： 旋转节点的右子树的右子树
// 左单旋：右边浅，左边深时
    // 旋转节点：当前不平衡的节点
    // 新根： 左子树的根节点
    // 变化分支： 旋转节点的左子树的右子树
    // 不变分支： 旋转节点的右子树的左子树

// 双旋： 左右双旋，右左双旋
// 当要对某个节点进行右单旋时，如果变化分支是唯一的最深分支 先左旋、后右旋
// 当要对某个节点进行左单旋时，如果变化分支是唯一的最深分支 先右旋、后左旋



function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
}

var a = new TreeNode('8');
var b = new TreeNode('7');
var c = new TreeNode('6');
var d = new TreeNode('5');
var e = new TreeNode('2');
a.left = b;
b.left = c;
c.left = d;
d.left = e;


function getDeep(root) {
    if (root === null) return 0;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断 是否为 平衡二叉树
function isBanance(root) {
    if (root === null) return true;
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) return false;
    else return isBanance(root.left) && isBanance(root.right);
}

function leftRotate(root) {
    var newRoot = root.right;
    var changeTree = root.right.left;
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}
function rightRotate(root) {
    var newRoot = root.left;
    var changeTree = root.left.right;
    root.left = changeTree;
    newRoot.right = root;
    return newRoot;
}

function change(root) {
    if(isBanance(root)) return root;
    if(root.left !== null) {
        root.left = change(root.left);
    }
    if(root.right !== null) {
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) return true;
    else if (leftDeep > rightDeep) {
        var changeTreeDeep =  getDeep(root.left.right);
        var noChangeTreeDeep =  getDeep(root.left.left);
        if(changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        return rightRotate(root)
    }
    else if (rightDeep > leftDeep) {
        var changeTreeDeep =  getDeep(root.left.left);
        var noChangeTreeDeep =  getDeep(root.left.right);
        if(changeTreeDeep > noChangeTreeDeep) {
            root.right = leftRotate(root.right);
        }
        return leftRotate(root);
    }
}

console.log(isBanance(a));
const newRoot = change(a);
console.log(isBanance(newRoot));
console.log(newRoot);

