// 将所有点都连同，且花费最少

// -----------------------------
//         B
//       / | \
//    4/   |   \6
//   /     |     \
// A       |8      D
//   \7    |     /  \
//     \   |   /5     \7
//       \ | /          E
//         C
// -----------------------------

// 一个图，可以用点集合与边集合表示
// [A, B, C, D, E]
//   |  A  |  B  |  C  |  D  |  E
// -------------------------------
// A |  0  |  4  |  7  |  ∞  |  ∞
// -------------------------------
// B |  4  |  0  |  8  |  6  |  ∞
// -------------------------------
// C |  7  |  8  |  0  |  5  |  ∞
// -------------------------------
// D |  ∞  |  6  |  5  |  0  |  7
// -------------------------------
// E |  ∞  |  ∞  |  ∞  |  7  |  0
// -------------------------------
var infinate = 10000;
var pointSet = ['A', 'B', 'C', 'D', 'E'];
var distanceSet = [
    [0, 4, 7, infinate, infinate],
    [4, 0, 8, 6, infinate],
    [7, 8, 0, 5, infinate],
    [infinate, 6, 5, 0, 7],
    [infinate, infinate, infinate, 7, 0]
];


function getIndex(str) {
    for (var i = 0; i < pointSet.length; i++) {
        if (str === pointSet[i]) return;
    }
    return -1;
}

// 根据已连接节点，获取距离最近的点(点集合，边集合，已连接点集合)
function getMinDistanceNode(pointSet, distanceSet, nowPointSet) {
    // 起点
    var fromNode = null;
    // 终点
    var minDistanceNode = null;
    // 最小距离
    var minDistance = infinate;
    // 对所有的已经连接的点遍历
    for (var i = 0; i < nowPointSet.length; i++) {
        // 找到该点对应的边，都有哪些
        var thisPointIndex = pointSet.indexOf(nowPointSet[i]);
        // console.log('-', distanceSet[thisPointIndex]);
        for (j = 0; j < distanceSet[thisPointIndex].length; j++) {
            // 如果 这条边的另一个点 没有被连进来，并且是较短的，记录下来
            // console.log('--', pointSet[j], nowPointSet.indexOf(pointSet[j]), distanceSet[thisPointIndex][j]);
            if (nowPointSet.indexOf(pointSet[j]) === -1 && distanceSet[thisPointIndex][j] && distanceSet[thisPointIndex][j] <= minDistance) {
                fromNode = nowPointSet[i];
                minDistanceNode = pointSet[j];
                minDistance = distanceSet[thisPointIndex][j];
            }
        }
    }
    console.log(fromNode, minDistanceNode, minDistance);
    return minDistanceNode;
}

function prim(pointSet, distanceSet, start) {
    var nowPointSet = []; // 已连接点集合
    nowPointSet.push(start);

    while (true) {
        var minDistanceNode = getMinDistanceNode(pointSet, distanceSet, nowPointSet);
        nowPointSet.push(minDistanceNode);
        if (nowPointSet.length === pointSet.length) break;
    }
    return nowPointSet;
}


var res = prim(pointSet, distanceSet, 'C');

console.log(res);
