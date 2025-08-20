let numbers =  [1, 5, -2];
let numPostive = true;

for (let num of numbers){
    if(num < 0){
        numPostive = false
        break;
    }
}
  console.log(numPostive);
 