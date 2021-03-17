var longestCommonPrefix = function(strs) {  
    var con='';
    let j=0;
    if(!strs.length) return con;
    while(j<strs[0].length){ 
        for(let i=1;i<strs.length;i++){ 
            if(strs[i][j]!=strs[0][j]) return con;
        }  
        con+=strs[0][j];
        j++;  
    } 
    return con; 
};