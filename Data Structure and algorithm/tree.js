// 满二叉树
// 所有的叶子节点都在最底层，非叶子节点都有两个子节点

// 完全二叉树
// 叶子节点都在最后一层或倒数第二层，叶子节点都向左靠拢（国际定义： 如果有叶子节点，就一定有两个叶子节点）


// 前序遍历

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var a = new TreeNode("a");
var b = new TreeNode("b");
var c = new TreeNode("c");
var d = new TreeNode("d");
var e = new TreeNode("e");
var f = new TreeNode("f");
var g = new TreeNode("g");

a.left = c;
a.right = b;

c.left = f;
c.right = g;

b.left = d;
b.right = e;

// function firstRoot(root){
//   if(root === null) return ;
//   console.log(root.value);
//   firstRoot(root.left);
//   firstRoot(root.right);
// }
function firstRoot(root) {
  if (root === null) {
    return [];
  }
  var res = [];
  res = res.concat(root.value, firstRoot(root.left), firstRoot(root.right));
  return res;
}

console.log(firstRoot(a));

function midRoot(root) {
  if (root === null) {
    return [];
  }
  var res = [];
  res = res.concat(midRoot(root.left), root.value, midRoot(root.right));
  return res;
}
console.log(midRoot(a));

function lastRoot(root) {
  if (root === null) {
    return [];
  }
  var res = [];
  res = res.concat(lastRoot(root.left), lastRoot(root.right), root.value);
  return res;
}
console.log(lastRoot(a));

// function lastRoot2(root){
//   if(root === null){
//     return [];
//   }
//   return Array.prototype.concat.call(lastRoot(root.left), lastRoot(root.right), root.value)
// }
// console.log(lastRoot2(a));


var firstRootResult = ['a', 'c', 'f', 'g', 'b', 'd', 'e'] // 前
var midRootResult = ['f', 'c', 'g', 'a', 'd', 'b', 'e'] // 中
var lastRootResult = ['f', 'g', 'c', 'd', 'e', 'b', 'a'] // 后
// 还原二叉树
// 根据前序和中序

function restoreByFirstMid(first, mid) {
  if (first == null || mid == null || first.length === 0 || mid.length === 0 || first.length !== mid.length) return null;
  var root = new TreeNode(first[0]);
  var index = mid.indexOf(root.value);
  var firstLeft = first.slice(1, 1 + index);
  var firstRight = first.slice(1 + index, first.length);
  var midLeft = mid.slice(0, index);
  var midRight = mid.slice(index + 1, mid.length);
  root.left = restoreByFirstMid(firstLeft, midLeft);
  root.right = restoreByFirstMid(firstRight, midRight);
  return root;
}
console.log(restoreByFirstMid(firstRootResult, midRootResult));


// 根据后序和中序还原二叉树
function restoreByLastMid(last, mid) {
  if (last == null || mid == null || last.length === 0 || mid.length === 0 || last.length !== mid.length) return null;
  var root = new TreeNode(last[last.length - 1]);
  var index = mid.indexOf(root.value);
  var lastLeft = last.slice(0, index);
  var lastRight = last.slice(index, last.length - 1);
  var midLeft = mid.slice(0, index)
  var midRight = mid.slice(index + 1, mid.length);
  root.left = restoreByLastMid(lastLeft, midLeft);
  root.right = restoreByLastMid(lastRight, midRight);
  return root;
}
console.log(restoreByLastMid(lastRootResult, midRootResult));

// 搜索
// 深度优先搜索

function deepFirstSearh(root, target) {
  if (root == null) return false;
  console.log(root.value);
  if (root.value === target) {
    return true;
  } else {
    return deepFirstSearh(root.left, target) || deepFirstSearh(root.right, target);
  }
}

console.log(deepFirstSearh(a, 'e'));

// 广度优先搜索
function breadthFirstSearch(rootList, target) {
  // console.log('111111',nodeList)
  if(rootList == null || rootList.length === 0) return false;
  var childList = []; 
  for(var i = 0; i < rootList.length; i ++){
    // console.log(nodeList[i].value)
    if(rootList[i] !== null){
      console.log(rootList[i].value)
      if(rootList[i].value === target){
        return true;
      }else{
        childList.push(rootList[i].left)
        childList.push(rootList[i].right)
      }
    }
  }
  return breadthFirstSearch(childList, target);
}


console.log(breadthFirstSearch([a], 'h'));


