let bottles = +prompt("Enter the starting number of bottles:");
let drink = prompt("Enter the name of the drink:");

document.write(`<h2>Song about ${bottles} bottles of ${drink}</h2>`);

for (let i = bottles; i > 0; i--) {
    document.write(`<br>${i} bottles of ${drink} on the wall,<br>`);
    document.write(`<br>${i} bottles of ${drink},<br>`);
    document.write("<br>If one of those bottles should happen to fall,<br>");
}

document.write(
  `<br>No more bottles of ${drink} on the wall, no more bottles of ${drink}.There's nothing else to fall, because there's no more bottles of ${drink} on the wall.`
);