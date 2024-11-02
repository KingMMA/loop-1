function play() {
  let n = +prompt("Введіть діапазон (від 0, до вашого числа): ")
  let targetNumber = Math.floor(Math.random() * n);
  alert(`Вгадайте число від 0 до ${n}.`);

  while (true) {
      let input = prompt("Введіть число:");

      if (isNaN(input)) {
          alert("Помилка: введіть коректне число!");
          continue;
      }
      let guess = +input;

      if (guess === targetNumber) {
          alert("You win!");
          break;
      } 

      if (input === "") {
          alert("Game over!");
          break;
      }

      if (guess < targetNumber) {
          alert("Занадто мало!");
      } else if (guess > targetNumber) {
          alert("Занадто багато!");
      }
  }
}