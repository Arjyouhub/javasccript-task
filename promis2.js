function printNumbers() {
  let num = 1;

  let interval = setInterval(() => {
    console.log(num);
    num++;

    if (num > 5) {
      clearInterval(interval);
    }
  }, 1000);
}

printNumbers();
