// 链接：https://www.nowcoder.com/questionTerminal/27086d759f01413b94a1a30a53e4a333?answerType=1&f=discussion
// 来源：牛客网

// 多多君拼团购买了N个骰子，为了方便后面进行活动，多多君需要将这些骰子进行分类。



// 两个骰子为同类的定义是：
// 1
// 将其中一个骰子通过若干次上下、左右或前后翻转后，其与另一个骰子对应的6面数字均相等。

// 现在多多君想知道不同种类的骰子的数量分别有多少。

// 输入描述:
// 第一行1个整数N，表示骰子的数量。
// （1 <= N <= 1,000）
// 接下来N行，每行6个数字（1～6，且各不相同）
// 其中第i行表示第i个骰子当前上、下、左、右、前、后这6面的数字。


// 输出描述:
// 共2行:
// 第一行1个整数M，表示不同种类的骰子的个数
// 第二行M个整数，由大到小排序，表示每个种类的骰子的数量
// 示例1
// 输入
// 2
// 1 2 3 4 5 6
// 1 2 6 5 3 4
// 输出
// 1
// 2
// 说明
// 第二个骰子相当于是第一个骰子从左向右旋转了一面得到，属于同类。
// 示例2
// 输入
// 3
// 1 2 3 4 5 6
// 1 2 6 5 3 4
// 1 2 3 4 6 5
// 输出
// 2
// 2 1
// 说明
// 第三个骰子无法通过任何旋转变换成第一个或第二个骰子。
// 示例3
// 输入
// 10
// 2 5 1 3 4 6
// 5 4 3 2 1 6
// 1 4 6 2 3 5
// 1 5 6 3 4 2
// 6 4 2 1 5 3
// 3 6 4 5 2 1
// 1 6 3 4 2 5
// 5 1 4 2 6 3
// 6 2 3 1 5 4
// 5 3 6 1 4 2
// 输出
// 9
// 2 1 1 1 1 1 1 1 1
// 说明
// 只有第4个骰子(1 5 6 3 4 2)与第8个骰子(5 1 4 2 6 3)属于同一类。

// 一种可能的变换方式:
// 1) 首先从右向左翻转1次
//  (1 5 6 3 4 2) -> (1 5 4 2 3 6)
// 2) 然后从上向下翻转2次
//  (1 5 4 2 3 6) -> (6 3 4 2 1 5) -> (5 1 4 2 6 3)

// 备注:
// 对于50%的数据，有： 1 <= N <= 50
// 对于100%的数据，有：1 <= N <= 1,000


/**
 * 
 * @param {number} length 骰子数量
 * @param {number[][]} nums 每个骰子每面的情况 [上, 下, 左, 右, 前, 后]
 * @returns [种类数， [每种骰子的数量]]
 */
var resolution = function (length, nums) {

    /**
     *
     * @param {number[]} param0
     * @returns string
     */
    function rotate([top, bottom, left, right, front, back]) {

        // 1 放在上边
        if (top === 1) { }
        else if (bottom === 1) {
            bottom = top;
            top = 1;
            var temp = front;
            front = back;
            back = temp;
        }
        else if (left === 1) {
            left = bottom;
            bottom = right;
            right = top;
            top = 1;
        }
        else if (right === 1) {
            right = bottom;
            bottom = left;
            left = top;
            top = 1;
        }
        else if (front === 1) {
            front = bottom;
            bottom = back;
            back = top;
            top = 1;
        }
        else {
            back = bottom;
            bottom = front;
            front = top;
            top = 1;
        }
        // 前后左右最小的放前面
        const min = Math.min(front, back, left, right);
        if (front === min) { }
        else if (back === min) {
            var temp = front;
            front = back;
            back = temp;
            temp = left;
            left = right;
            right = temp;
        }
        else if (left === min) {
            var temp = front;
            front = left;
            left = back;
            back = right;
            right = temp;
        }
        else {
            var temp = front;
            front = right;
            right = back;
            back = left;
            left = temp;
        }
        return top + '' + bottom + '' + left + '' + right + '' + front + '' + back;
    }
    var res = {}
    for (var i = 0; i < length; i++) {
        var str = rotate(nums[i]);
        res[str] = typeof res[str] === 'number' ? res[str] + 1 : 1
    }
    const types = Object.values(res).sort((a, b) => b - a);
    return [
        types.length,
        types
    ]
}

console.log(
    resolution(
        3,
        [
            [1, 2, 3, 4, 5, 6],
            [1, 2, 6, 5, 3, 4],
            [1, 2, 3, 4, 6, 5]
        ]
    )
);

console.log(
    resolution(
        10,
        [
            [2, 5, 1, 3, 4, 6],
            [5, 4, 3, 2, 1, 6],
            [1, 4, 6, 2, 3, 5],
            [1, 5, 6, 3, 4, 2],
            [6, 4, 2, 1, 5, 3],
            [3, 6, 4, 5, 2, 1],
            [1, 6, 3, 4, 2, 5],
            [5, 1, 4, 2, 6, 3],
            [6, 2, 3, 1, 5, 4],
            [5, 3, 6, 1, 4, 2]
        ]
    )
);
