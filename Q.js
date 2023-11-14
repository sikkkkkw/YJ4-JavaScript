let height = prompt("당신의 신장은?","0"); // 신장 입력
let weight = prompt("당신의 체중은?","0"); // 체중 입력
let normal = (height - 100)*0.9; // 적정체중값을 구하고 normal에 넣음
document.write(`적정 체중은${normal}입니다.<br>`); 
result = (weight > normal) ? " 적정 체중을 초과했습니다." : " 적정 체중이거나 미달입니다.";
document.write("당신은"+result);

