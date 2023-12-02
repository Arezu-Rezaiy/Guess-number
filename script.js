`use strict`;
const secretNumber= Math.trunc(Math.random()*20+1);
// Again button
document.querySelector(".again").addEventListener("click", function(){
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".message").textContent="Start guessing...";
   score= document.querySelector(".score").textContent="20";
    document.querySelector(".guess").value="";
});

 var score= document.querySelector(".score").textContent;
 // Check Button
document.querySelector(".check").addEventListener('click', function(){
const guessNumber =Number(document.querySelector(".guess").value) ;
if(!guessNumber){
document.querySelector(".message").textContent="No number";
}
//High
else if(guessNumber>secretNumber){
    if(score>1){
        document.querySelector(".message").textContent="high";
score--;
document.querySelector(".score").textContent=score;
    }
else{
    document.querySelector(".message").textContent="you lost";
score=0;
document.querySelector(".score").textContent=score;
document.querySelector("body").style.backgroundColor="red";
}
}
// Low
else if(guessNumber<secretNumber){
    if(score>1){
        document.querySelector(".message").textContent="low";
score--;
document.querySelector(".score").textContent=score;
    }
else{
    document.querySelector(".message").textContent="you lost";
score=0;
document.querySelector(".score").textContent=score;
document.querySelector("body").style.backgroundColor="red";
}
}
// Correct
else if(guessNumber===secretNumber){
    document.querySelector(".message").textContent="correct guess";
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").style.width="30rem";
}
});




