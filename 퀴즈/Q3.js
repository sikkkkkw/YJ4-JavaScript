let price1 = 3000,price2 = 6000,price3 = 3000,result,sum ;
sum = price1+price2+price3;

result = sum > 10000 ? `${sum-10000}원 초과` : `돈 관리 잘했어요!`;
document.write(result);
document.write("<hr>");

let sales1 = 1200;
let sales2 = 1300;
let sales3 = 1000;
let sales4 = prompt(`4분기 실적은?`,"0");
let avg=(sales1+sales2+sales3)/3;

result = sales4>=avg ? '평균이상입니다.' : '평균 미달입니다.'
document.write(result);

