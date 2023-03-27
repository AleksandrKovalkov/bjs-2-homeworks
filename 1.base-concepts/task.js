"use strict"
let solveEquation = (a, b, c) => {
  if(a == 0)
      return false;
  let res = {};
  let D = b * b - 4 * a * c;
  console.log('D = ' + D);
  if(D < 0)
      return false;
  res['discriminant'] = D;
  if(D == 0)
      res["quadratic roots"] = (-b + Math.sqrt(D)) / (2 * a);
  else if(D > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(D)) / (2 * a));
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
      res["quadratic roots"] = tmp;
  }
  return res;
}
console.log(solveEquation(1,12,24));

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
			
  		let today = new Date();
  		if (today.getFullYear() > date.getFullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${date}`;
		} else {
			let s = am - con;						  
  			let n = date.getMonth() - today.getMonth() + (12*(date.getFullYear() - today.getFullYear())); 
  			let pay = s*(per+per/(((1+per)**n)-1));			
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(totalAmount);
 			return +totalAmount;
 		}	
    }

  return +totalAmount;
}
