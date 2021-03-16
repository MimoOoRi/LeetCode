/**
 * @param {number} x
 * @return {number}
 * 32位整数表示范围
 * 无符号：[0,2^n-1], 111=7=2^3-1;
 * 有符号：[0,7]U[-1,-8]=[-8,7]=[-2^3,2^3-1];
 *解析：X%10 = prev*10 + next;
 *    
 *    判断范围：
 *       prev*10 < 32位有符号整数 [-128,127]
 *        if(... = [...])
 *            负数: next > -8
 *            正数：next < 7
 *    X/=10; 直到 X < 10;
*/

//写法一：限制条件————假设环境不允许存储 64 位整数（有符号或无符号）。
var reverse = function(x) {
    let prev = 0;
    const MAX = (2**31)-1;
    const MIN = - (2**31);
    while(x!==0){
        let next = x%10;
        x = parseInt(x/10); //错写成x/10
        //正数
        if(prev > MAX/10||(prev == MAX/10 && next>7)){
            return 0;
        }
        //负数
        if(prev < MIN/10 || (prev == MIN/10 && next <-8)){
            return 0;
        }
        prev = prev*10+next;
    }
    return prev;
};

//写法二————无限制条件
/* SPLIT 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割 
 * REVERSE 该方法会改变原来的数组，而不会创建新的数组。且不影响单个元素内部顺序 How are you → you are How
 * JOIN 用于把数组中的所有元素放入一个字符串。如果省略该参数，则使用逗号作为分隔符。
 * Math.pow() 等同于 ^ 或 ** 
 * 方法：
 *  数字转换为string，split每一位，然后reverse，join后，转换为 int
 * 完善正负符号
 * 判断结果是否小于32位 [-2^31,2^31-1]
 * (C)?A:B 判断 C ，成立运行 A，不成立运行 B
*/
var reverse2 = function(x){
    let res = parseInt(x.toString().split("").reverse().join(""));
    (x>0)?res = res:res=-res;
    return (res<Math.pow(2,31)-1&&res>-Math.pow(2,31))?res:0;
}
