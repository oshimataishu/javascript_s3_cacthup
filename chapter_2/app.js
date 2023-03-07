// if文
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段はりんごより安いです');
}else if(orange === apple){
  alert('みかんとりんごは同じ値段です');
}else{
  alert('みかんの値段はりんごより高いです');
}

// while文
let max = 380000;
let num = 0.01;
let count = 0;

while(num < max){
  num *= 2;
  count += 1;
}

alert('２を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// for文
let total = 0;
for( var i = 1; i < 11; i++){
  total += i;
}

alert(total);


// 確認問題
alert(3 + 5);
alert(3 - 5);
alert(3 * 5);
alert(3 / 5);