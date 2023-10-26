let li = document.getElementsByTagName('li');
li[0].innerHTML = 'Test입니다';
let sum = 0;

for (let i = 1; i <= 5; i++){
    sum += i;
}

li[1].innerHTML = `1 ~ 5 합계 : ${sum}`;