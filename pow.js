const n = +prompt("Input n");
let x = 2;
for (let i = 0; i <= n; ++i) {
   document.write(`<br>Pow of ${i} is ${x**i}<br>`);
}