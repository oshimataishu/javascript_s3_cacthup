let user_hand;

user_hand = prompt('じゃんけんの手をグー，チョキ，パーから選んでください');
if(user_hand == null){
  alert('またチャレンジしてね');
}else{
  while((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー')){
    user_hand = prompt('グー・チョキ・パーのいずれかで入力してください');
    if(user_hand == null){
      alert('またチャレンジしてね！');
    }
  }
}



alert('あなたの選んだ手は' + user_hand + 'です!');

let cp_hand = choiceCPHand();
alert('CPの選んだ手は' + cp_hand + 'です!');

alert('よって，結果は，，，' + judge(user_hand, cp_hand) + 'です！');

function choiceCPHand(){
  let cp_hand_num = Math.floor(Math.random()*3);
  let cp_hand;

  if(cp_hand_num === 0){
    cp_hand = 'グー'
  }else if(cp_hand_num === 1){
    cp_hand = 'チョキ';
  }else{
    cp_hand = 'パー';
  }

  return cp_hand;
}

function judge(user_hand, cp_hand){
  let result;
  if(user_hand != 'グー' && user_hand != 'チョキ' && user_hand != 'パー'){
    return result = '謎';
  }else{
    if(cp_hand === 'グー'){
      if(user_hand === 'グー'){
        result = '引き分け';
      }else if(user_hand === 'チョキ'){
        result = '負け';
      }else if(user_hand === 'パー'){
        result = '勝ち';
      }
      return result;
    }else if(cp_hand === 'チョキ'){
      if(user_hand === 'グー'){
        result = '勝ち';
      }else if(user_hand === 'チョキ'){
        result = '引き分け';
      }else if(user_hand === 'パー'){
        result = '負け';
      }
      return result;
    }else if(cp_hand === 'パー'){
      if(user_hand === 'グー'){
        result = '負け';
      }else if(user_hand === 'チョキ'){
        result = '勝ち';
      }else if(user_hand === 'パー'){
        result = '引き分け';
      }
    }
    return result;
  }

}