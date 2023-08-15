// 将被压缩的字符串还原
// 输入50a6we8y20x 输出50 个 a 6 个 we 8 个 y20 个 x
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaweweweweweweyyyyyyyyxxxxxxxxxxxxxxxxxxxx
var str = '50a6we8y20x';

var length = str.length;
var i = 0;
var count = '';
var subStr = '';
var finalStr = '';
while (i <= length) {
    var char = str[i];
    // if (isNaN(char) && typeof char !== 'undefined') {
    if (char && isNaN(char)) {
        subStr += char;
    }
    else {
        if (subStr.length > 0) {
            finalStr += subStr.repeat(count);
            count = '';
            subStr = '';
        }
        count += char;
    }
    i++;
}



console.log(finalStr);
