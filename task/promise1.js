
function add(a,b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject(" Numbers cannot be negative");
    } else if (a % 3 === 0 || b % 3 === 0) {
      reject("Numbers cannot be divisible by 3");
    } else {
      resolve(a + b);
    }
  });
}
function multiplyBy3(value) {
  return new Promise((resolve) => {
    resolve(value * 3);
  });
}
add(4,5) 
  .then((sum) => {
    console.log("Sum:", sum);
    return multiplyBy3(sum);
  })
  .then((result) => {
    console.log("Final Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  async function solve() {
  try {
    const sum = await add(7, 8);
    console.log("Sum:", sum);

    const result = await multiplyBy3(sum);
    console.log("Final Result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

solve();
