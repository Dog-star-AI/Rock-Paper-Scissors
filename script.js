/*  
    Rock = 0, paper =1, and scissors = 2
    win = 0 lose = 1 draw = 2
*/
//get random number
function user_check(choice){
    if(choice == "ROCK"){
        return 0;
    }else if(choice === "PAPER"){
        return 1;
    }else if(choice === "SCISSORS"){
        return 2;
    }else{
        return get_rand(3);
    }
}
function Winner_check(human, bot){
    if(human == bot){
        return 2;
    }else if(human === 0 && bot == 1){
        return 1;
    }else if(human === 0 && bot == 2){
        return 0;
    }else if(human === 1 && bot == 0){
        return 0;
    }else if(human === 1 && bot == 2){
        return 1;
    }else if(human === 2 && bot == 1){
        return 0;
    }else if(human === 2 && bot == 0){
        return 1;
    }else{
        return get_rand(3);
    }
}
function final(results){
    let win = "You Won";
    let lose = "You lost";
    let draw ="Its a draw";
    switch(results){
        case 0:
            window.alert(win);
            break;
        case 1:
            window.alert(lose);
            break;
        case 2:
            window.alert(draw);
            break;
        default:
            window.alert(draw);
            break;
    }
}
function get_rand(max){
    return Math.floor(Math.random()*max);
}
let bot = get_rand(3);//returns a number between 0 and 3
let get_user = prompt('Rock, Papper or Scissors').toUpperCase();
let human= user_check(get_user);
let result = Winner_check(human, bot);

let human_win = 0;
let bot_win = 0;
for(let i = 0; i < 5; i++){
    final(result);
    if(result === 0){
        human_win++;
    }else if(result === 1){
        bot_win++;
    }else

}

