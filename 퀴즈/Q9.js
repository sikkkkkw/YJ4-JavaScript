let i = 1;
let j = 0;
while(i <= 10){
    j += i;
    i++;
}document.write(`1에서 10까지의 합은 <mark>${j}</mark><br>`);
while(i <= 10){
    j += i++;
}document.write(`1에서 10까지의 합은 <mark>${j}</mark>`);
