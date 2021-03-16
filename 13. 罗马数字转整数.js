var romanToInt = function(s) {
    let arr = s.split("");
    let len = s.length;
    let sum = 0;
    for(let i=0;i<len;i++){
        if(arr[i]=="V"){sum+=5;}
        else if(arr[i]=="L"){sum+=50;}
        else if(arr[i]=="D"){sum+=500;}
        else if(arr[i]=="M"){sum+=1000;}
        else if(arr[i]=="I"){
            if(arr[i+1]=="V" || arr[i+1]=="X"){
                sum-=1;
            }
            else sum+=1;
        }
        else if(arr[i]=="X"){
            if(arr[i+1]=="L" || arr[i+1]=="C"){
                sum-=10;
            }
            else sum+=10;
        }
        else if(arr[i]=="C"){
            if(arr[i+1]=="D" || arr[i+1]=="M"){
                sum-=100;
            }
            else sum+=100;
        } 
    }
    return sum;
};

// 学习方法：
/* 首先建立一个HashMap来映射符号和值，然后对字符串从左到右来，
 * 如果当前字符代表的值不小于其右边，就加上该值；否则就减去该值。
 * 以此类推到最左边的数，最终得到的结果即是答案
 */
var romanToInt = function(s) { 
    let hashMap = new Map();
    let arr = s.split("");
    let sum=0;
    hashMap.set(["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]);
    let len = s.length;
    for(let i=0;i<len;i++){
        if(arr[i]<arr[i+1]){
            sum-=hashMap.values(arr[i]);
        }
        else
            sum+=hashMap.values(arr[i]);
    }
    return sum;
};
//  JS中 map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    //  声明 HashMap：此时hashMap是一个对象，Key：Value的形式，用逗号分隔开,当做属性
    // arr.reduce https://www.cnblogs.com/zhaofeis/p/10620226.html 
    // redecu(func(),init);  init为初始值，不写默认为 0
    //  func() 此处为 胖箭头函数
var romanToInt = function(s) {  
    let arr = s.split('');
    let sum=0;
    let hashMap = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }; 
    return arr.reduce((sum,cur,idx,arr)=>{ 
        hashMap[cur]<hashMap[arr[idx+1]]?sum-hashMap[cur]:sum+hashMap[cur]},0); //不能运行  undefined 
};
// 胖箭头函数没有返回值

var romanToInt = function(s) { 
    let arr = s.split(''); 
    let hashMap = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}; 
    return arr.reduce((sum,cur,idx,arr)=>{
    return hashMap[cur]<hashMap[arr[idx+1]]?sum-hashMap[cur]:sum+hashMap[cur];},0);
};

// 解析：当函数只有单句表达式时，可以省略{}
// (param1, param2, …, paramN) => expression
// 此时会有一个隐含的返回值，等同于: (param1, param2, …, paramN) => { return expression; } 
// 无参数 ()=>{Statement} 

// 更进一步：
var romanToInt = function(s) { 
    let arr = s.split(''); 
    let hashMap = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}; 
    return arr.reduce((sum,cur,idx,arr)=>hashMap[cur]<hashMap[arr[idx+1]]?sum-hashMap[cur]:sum+hashMap[cur],0);
};

