const tc = parseFloat(prompt("Пожалуйста, введите температуру в градусах Цельсия")); 
//Позволим ввести дробное значение т.к. результат тоже дробь
const tf = (9/5 * tc + 32).toFixed(1);
alert(`Цельсий: ${tc}, Фаренгейт: ${tf}`);