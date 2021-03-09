/*  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
*/

/**
 * @param {number} x
 * @return {boolean}
 * 思路 ：转换string，找出len → 中间值mid 
 *      A: spilt("") →  数组里首位 i 和 len-1-i 比较 → i++ → if(!==){return 0;} 
 *      B: slice() → == 先转换类型再比较| === 类型不同则不等
 *      B: substring() - 不接受负数
 */

// 208 ms	47 MB
 var isPalindrome = function(x) {
    var head = x.toString();
    var back = head.split('').reverse().join('');
    var mid = Math.ceil(head.length/2);
    if(head.slice(0,mid)==back.slice(0,mid)){
        return true; 
    }
    else
        return false;  
};

// 精简代码 284 ms	46.3 MB
// var isPalindrome = function(x) {
//     return x.toString() == x.toString().split("").reverse().join(""); 
// };