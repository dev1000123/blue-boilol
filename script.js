character =
document.getElementById("character");
var score = 0;
block = document.getElementById("block");
var finalscore;
var isded = false;
function jump(){

    if(character != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}



function changeWidth(ele) {
    // Will assign a new width, but will override other style properties.
    ele.setAttribute('style', 'width:200px;');
}
checkDead = setInterval(function(){
    characterTop = 
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    blockleft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if(blockleft<20 && blockleft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.animation = "none";
        document.getElementById("block").offsetHeight = 
        alert("you have ded lol")
        location.replace("index.html")
        setTimeout(restrat, 3000);
        isded = true
    }
    
    if(isded == false){
        score += 0.01
        finalscore = Math.round(score)
        document.getElementById('score').innerText = finalscore
    }
    

}, 10);

function restrat(){
    location.reload();
}