

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

// 双旋： 左右双旋，右左双旋    左左双旋，右右双旋
// 当要对某个节点进行右单旋时，如果变化分支是唯一的最深分支 先左旋、后右旋
// 当要对某个节点进行左单旋时，如果变化分支是唯一的最深分支 先右旋、后左旋
// 如果变化分支的高度比旋转节点的另一侧告诉超过2，那么单旋之后依然不平衡，所以单旋之后，需要对此分之继续进行平衡分析，会出现 左左双旋，右右双旋


// 计算次数
var count = 0;


function TreeNode(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
}

// 获取树的深度
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

// 左旋
function leftRotate(root) {
    var newRoot = root.right;
    var changeTree = root.right.left;
    root.right = changeTree;
    newRoot.left = root;
    return newRoot;
}
// 右旋
function rightRotate(root) {
    var newRoot = root.left;
    var changeTree = root.left.right;
    root.left = changeTree;
    newRoot.right = root;
    return newRoot;
}

// 最终版  转化二叉树到平衡二叉树
function change(root) {
    if (isBanance(root)) return root;
    if (root.left !== null) {
        root.left = change(root.left);
    }
    if (root.right !== null) {
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) return root;
    else if (leftDeep > rightDeep) { // 左深右浅    右单旋
        var changeTreeDeep = getDeep(root.left.right);
        var noChangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) { // 左右单旋
            root.left = leftRotate(root.left);
        }
        var newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right); // 左左单旋
        newRoot = change(newRoot);
        return newRoot;
    }
    else if (rightDeep > leftDeep) { // 右深左浅    左单旋
        var changeTreeDeep = getDeep(root.right.left);
        var noChangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > noChangeTreeDeep) { // 右左单旋
            root.right = rightRotate(root.right);
        }
        var newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left); // 右右单旋
        newRoot = change(newRoot);
        return newRoot;
    }
    return root;
}



var a = new TreeNode('9');
var b = new TreeNode('8');
var c = new TreeNode('7');
var d = new TreeNode('6');
var e = new TreeNode('5');
var f = new TreeNode('4');
a.left = d;
d.left = e;
e.left = f;
d.right = c;
c.right = b

console.log(
    isBanance(a)
)
const newRoot = change(a);
console.log(
    isBanance(newRoot)
)