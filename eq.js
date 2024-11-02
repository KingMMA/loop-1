let is_quadr = confirm("Чи є рівняння квадратним?");
if (is_quadr){
    let a = +prompt("Введіть коефіцієнт a: ")
    let b = +prompt("Введіть коефіцієнт b: ")
    let c = +prompt("Введіть коефіцієнт c: ")
    let D = (b**2)-4*a*c;
    if (D < 0){
        alert("Рівняння не має коренів")
    } else if (D === 0){
        x = (-b)/(2*a)
        alert(`Рівняння має 2 однакових корені: ${x}`)
    } else {
        sqrt_d = Math.sqrt(D)
        x1 = (-b-sqrt_d)/(2*a)
        x2 = (-b+sqrt_d)/(2*a)
        alert(`Рівняння має 2 різних корені: x1 = ${x1}, x2 = ${x2}`)
    }
} else {
    let a = +prompt("Введіть коефіцієнт a: ")
    let b = +prompt("Введіть коефіцієнт b: ")
    let x = -b/a
    alert(`Корінь рівняння: ${x}`)
}
