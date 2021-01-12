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


function canLink(begin, end, resultList) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(begin) !== -1) {
            beginIn = resultList[i];
        }
        if (resultList[i].indexOf(end) !== -1) {
            endIn = resultList[i];
        }
    }
    if (beginIn !== null && endIn !== null && beginIn === endIn) {
        return false;
    }
    return true;
}

function link(begin, end, resultList) {
    var beginIn = null;
    var endIn = null;
    for (var i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(begin) !== -1) {
            beginIn = i;
        }
        if (resultList[i].indexOf(end) !== -1) {
            endIn = i;
        }
    }
    if (beginIn === null && endIn === null) {
        resultList.push([begin, end]);
    } else if (beginIn !== null && endIn === null) {
        resultList[beginIn].push(end);
    } else if (beginIn === null && endIn !== null) {
        resultList[endIn].push(beginIn);
    } else if (beginIn !== null && endIn !== null) {
        resultList[beginIn] = resultList[beginIn].concat(resultList[endIn]);
        resultList.splice(endIn, 1);
    }
}

// 克鲁斯卡尔算法
function kruskal(pointSet, distanceSet) {
    var resultList = []; // 二维数组，代表有几个部落

    while (true) {
        var minDistance = infinate;
        var begin = null;
        var end = null;
        for (var i = 0; i < distanceSet.length; i++) {
            for (var j = 0; j < distanceSet[i].length; j++) {
                // 点 不是自己， 且 距离较短
                if (i !== j && distanceSet[i][j] < minDistance && canLink(pointSet[i], pointSet[j], resultList)) {
                    // console.log(i, j, distanceSet[i][j], minDistance, begin, end, resultList);
                    begin = pointSet[i];
                    end = pointSet[j];
                    minDistance = distanceSet[i][j];
                }
            }
        }
        console.log(begin, end, resultList);
        link(begin, end, resultList);
        if (resultList.length === 1 && resultList[0].length === pointSet.length) break;
    }

    return resultList[0];
}

var res = kruskal(pointSet, distanceSet);

console.log(res);
