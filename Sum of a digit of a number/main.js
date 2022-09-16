var num =parseInt(prompt("Enter the number")) 
var  remainder
var sum=0;
while(num!=0){
    remainder=num%10;
    sum=sum+remainder;
    num=Math.floor(num/10)
}

console.log(sum );