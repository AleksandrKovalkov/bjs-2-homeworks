"use strict"
function solveEquation(a, b, c) {
  let arr =[];
  let d = Math.pow(b, 2) - 4 * a * c;
  console.log('d = ' + d);
  if (d < 0){
    arr = [];
  } else if 
    (d === 0){
      arr = [-b/(2*a)];
  } else {
      arr = [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a)];
  }
  return arr;
}
console.log(solveEquation(1,5,4));
console.log(solveEquation(1,2,1));
console.log(solveEquation(1,2,10));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

    let per = parseInt(percent) / 100 / 12; 
    let con = parseInt(contribution); 	  	
    let am = parseInt(amount);  			  	
  	if (isNaN(per) || per < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
   	} else if (isNaN(con) || con < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
   	} else if (isNaN(am) || am < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
   	} else {
			
  		let today = new countMonths();
  		if (today.getFullYear() > countMonths.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
		} else {
			let s = am - con;						  
  			let n = countMonths.getMonth() - today.getMonth() + (12*(countMonths.getFullYear() - today.getFullYear())); 
  			let pay = s*(per+per/(((1+per)**n)-1));			
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(totalAmount);
 			return +totalAmount;
 		}	
    }

  return +totalAmount;

}
