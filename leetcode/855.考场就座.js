/*
 * @lc app=leetcode.cn id=855 lang=javascript
 * @lcpr version=20004
 *
 * [855] 考场就座
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**
 * @param {number} n
 */
class ExamRoom {
    constructor(n) {
        this.N = n;
        this.startMap = new Map();
        this.endMap = new Map();
        this.viaSet = new Set();
        this.viaSet.add([-1, n]);
    }
    /**
     * @return {number}
     */
    seat() {
        var maxDistance = -1;
        var maxVia = null;
        for (const via of this.viaSet) {
            var distance = this.getDistance(via);
            // console.log('distance:', distance, 'via:', via);

            if (distance > maxDistance || (distance === maxDistance && via[0] < maxVia[0])) {
                maxDistance = distance;
                maxVia = via;
            }
        }


        var seat;
        if (maxVia[0] === -1) {
            seat = 0;
        }
        else if (maxVia[1] === this.N) {
            seat = this.N - 1;
        }
        else {
            seat = maxVia[0] + Math.floor((maxVia[1] - maxVia[0]) / 2);
        }

        this.deleteVia(maxVia);
        this.addVia([maxVia[0], seat]);
        this.addVia([seat, maxVia[1]]);
        // console.log('maxVia:', maxVia, 'maxDistance:', maxDistance, 'seat:', seat);
        return seat;
    }
    /**
     * @param {number} p
     * @return {void}
     */
    leave(p) {
        var rightVia = this.startMap.get(p);
        var leftVia = this.endMap.get(p);
        // console.log('rightVia:', rightVia, 'leftVia:', leftVia, 'p', p, 'viaSet', this.viaSet, this.startMap, this.endMap);

        this.deleteVia(rightVia);
        this.deleteVia(leftVia);
        this.addVia([leftVia[0], rightVia[1]]);
    }
    getDistance(via) {
        var p1 = via[0];
        var p2 = via[1];
        if (p1 === -1) {
            return p2;
        }
        if (p2 === this.N) {
            return this.N - 1 - p1;
        }
        return Math.floor((p2 - p1) / 2);
    }
    addVia(via) {
        this.viaSet.add(via);
        this.startMap.set(via[0], via);
        this.endMap.set(via[1], via);
    }
    deleteVia(via) {
        this.viaSet.delete(via);
        this.startMap.delete(via[0]);
        this.endMap.delete(via[1]);
    }
    status() {
        var arr = new Array(this.N).fill(0);
        console.log(this.viaSet)
        Array.from(this.viaSet).forEach(item => {
            if (item[0] !== -1) {
                arr[item[0]] = 1;
            }
            if (item[1] !== this.N) {
                arr[item[1]] = 1;
            }
        })
        return arr;
    }
}







var room = new ExamRoom(10);

const p1 = room.seat();

console.log(room.status());

const p2 = room.seat();

console.log(room.status());

const p3 = room.seat();

console.log(room.status());

const p4 = room.seat();

console.log(room.status());

const p5 = room.seat();

console.log(room.status());

const p6 = room.seat();

console.log(room.status());

room.leave(p1)

console.log(room.status());
/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
// @lc code=end



/*
// @lcpr case=start
// ["ExamRoom","seat","seat","seat","seat","leave","seat"], [[10],[],[],[],[],[4],[]]\n
// @lcpr case=end

 */

