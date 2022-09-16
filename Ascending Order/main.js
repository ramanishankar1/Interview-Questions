var num=[10,2,32,12,78,87,19]
function ascending(){
     let newnum=num.sort((a,b)=>{
        return a-b;
     })
    return newnum
    
}
 
var ascend=ascending([num])
console.log(ascend);