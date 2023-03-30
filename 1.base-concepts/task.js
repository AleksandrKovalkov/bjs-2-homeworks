"use strict"
//function solveEquation(a, b, c) {
//  let arr =[];
//  let d = Math.pow(b, 2) - 4 * a * c;
//  console.log('d = ' + d);
//  if (d < 0){
//    arr = [];
//  } else if 
//    (d === 0){
//      arr = [-b/(2*a)];
//  } else {
//      arr = [(-b + Math.sqrt(d) ) / (2 * a), (-b - Math.sqrt(d) ) / (2 * a)];
//  }
//return arr;
//}
//console.log(solveEquation(1,5,4));
//console.log(solveEquation(1,2,1));
//console.log(solveEquation(1,2,10));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
	  return false;
	}
	else if (contribution === amount) {
	  return 0;
	}
	let credit = amount - contribution;
	let monthlyPercent = (percent / 100) / 12;
	let monthlyMortgage = credit * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
	let totalMorgage = monthlyMortgage * countMonths;
	return parseFloat(totalMorgage.toFixed(2));
  }
