let weight = 0.065;
let chess_board_square = 64;
let grains = 2**chess_board_square-1 // Тому що на першу клітку буде 1, а далі числа які виходять з 2**n
let total_weight_in_gr = grains*weight
let total_weight_in_kg = total_weight_in_gr/1000

console.log(`Загальна кількість зерен: ${grains}`)
console.log(`Вага зерен в грамах: ${total_weight_in_gr}`)
console.log(`Вага зерен в кілограмах: ${total_weight_in_kg}`)
