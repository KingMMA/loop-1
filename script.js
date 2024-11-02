let n = prompt("Введіть число");
if (!isNaN(n)){
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
      factorial *= i;
  }
  alert(`Факторіал від ${n}: ${factorial}`)
}
else {
  alert("Введено не число!");
}