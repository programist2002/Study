"use strict"
document.write("<h3>Завдання №1</h3>");
var x = 10;
while(x <= 20){
	if(x != 12){
		document.write("Квадрат числа" + x + "=" + (x*x) + "<br/>");
	}
	x++;
}

document.write("<h3>Завдання №2</h3>");
var y = 35;
while(y <= 87){
	if(y % 7 === 1 || y % 7 === 2 || y % 7 === 5){
		document.write(y + " ");
	}
	y++;
}
