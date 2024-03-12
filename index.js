let randomNumber=Math.ceil(Math.random()*100);
let userinputEl=document.getElementById("userinput");
let messageEl=document.getElementById("message");
console.log(randomNumber);


function chekKar(){
    let userVal = parseInt(userinputEl.value);
    if(userVal===randomNumber){
        messageEl.textContent="Congratulations you win 🎉👏!";
        messageEl.style.color="green";

    }

    else if(userVal>randomNumber){
        messageEl.textContent = messageEl.textContent = "It is too High 🔥!";
        messageEl.style.color="red";
    }
    else{
        messageEl.textContent=messageEl.textContent = "It is too low ! Try Again 😢";
        messageEl.style.color="orange";
        
    }

}