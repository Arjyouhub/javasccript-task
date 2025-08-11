let num = [12, 5, 43, 18];

let max = num[0];

num.forEach(num=>{
    if(num>max){
        max=num;
    }
});
console.log(`maximun number is \t ${max}`);
