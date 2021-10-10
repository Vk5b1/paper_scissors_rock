//rules accessors
let rulesbtn = document.getElementById('rules');
let closeRulesBox = document.getElementById('closebtn');
let rulesBox =  document.querySelector('.printRules');

//icon accessors
let weaponBox = document.querySelector('.weaponContainer');
let gameBox = document.querySelector('.gameBox');
let selectedIcon = document.querySelector('#selectedIcon');
let selectWeapon = document.querySelectorAll('.selectYourWeapon');
let iconField = document.querySelector('#iconField');
let t = document.querySelector('.weaponId');
let computerIcon = document.getElementById('computerSelectedIcon');

//victory section 
let youOrComputer = document.getElementById('winOrLose');
let playAgainbtn = document.getElementById('newGame');
let winBox = document.querySelector('.victoryBoard');


//score
let score = document.getElementById('score');


//initial values
score.textContent = 0;
gameBox.classList.add('hidden');
rulesBox.classList.add('hidden');
winBox.classList.add('hidden');

const weapons_array = ['paper','scissors','rock'];
let borderColors = ['hsl(230, 89%, 62%)','hsl(39, 89%, 49%)','hsl(349, 71%, 52%)'];
let playerScore = 0;
let weapons_array1;
let playerNum;
let icon;
let computerNum;

//select your weapon to start game.
for(let i = 0; i<selectWeapon.length; i++){
    selectWeapon[i].addEventListener('click',() => {
        // console.log(selectWeapon[i].value);
        icon = selectWeapon[i].value;
        weaponBox.classList.add('hidden');
        gameBox.classList.remove('hidden');
        selectedIcon.src = `icon-${selectWeapon[i].value}.svg`; 
        playerNum = Number(weapons_array.indexOf(selectWeapon[i].value));
        border(playerNum,iconField);
        // console.log(playerNum);

        //callling random.
        setTimeout(computerWeaponGenerator,1000);

    });
}

//coloring border
let border = (index,fieldIcon) => {
    fieldIcon.style.border = `15px solid ${borderColors[index]}`;
}

//see what are the rules here
rulesbtn.addEventListener('click',function() {
    rulesBox.classList.remove('hidden');
});

//after seeing close the rules
closeRulesBox.addEventListener('click', () => {
    rulesBox.classList.add('hidden');
}); 

//for computer let's generate a random weapon excepting player's choice.
function computerWeaponGenerator(){
    weapons_array1 = [...weapons_array];
    weapons_array1.splice(weapons_array.indexOf(icon),1);
    computerNum = Math.trunc(Math.random()*2);
    computerIcon.src = `icon-${weapons_array1[computerNum]}.svg`;

    setTimeout(t.removeAttribute('id'),1000);
    border(weapons_array.indexOf(weapons_array1[computerNum]),t);

    decideWinner(weapons_array1[computerNum],icon);
    // console.log(weapons_array1[computerNum],icon);
}

//click for new game
playAgainbtn.addEventListener('click',() =>{
    t.setAttribute('id','computerIconField');
    t.style.border = 'none';
    gameBox.classList.add('hidden');
    weaponBox.classList.remove('hidden');
    // console.log(playAgainbtn.style.textContent.fontWeight);
});

//finding who is the winner.
const decideWinner = (comIcon,playIcon) =>{
    let wol;
    // console.log(comIcon,playIcon);
    switch(playIcon){
        case 'paper': if(comIcon === 'rock'){
                            wol = 1;
                        }else{
                            wol = 0;
                        }
                        break;
        
        case 'rock' : if(comIcon === 'scissors'){
                            wol = 1;
                        }else{
                            wol = 0;
                        }
                        break;
        
        case 'scissors' : if(comIcon === 'paper'){
                            wol = 1;
                        }else{
                            wol = 0;
                        }
                        break;
        case 'default' : document.write('something went wrong');
    }

    if(wol === 1){
        youOrComputer.textContent = 'YOU WIN';
        playAgainbtn.style.color = 'hsl(230, 89%, 62%)';
        setInterval(winBox.classList.remove('hidden'),1000);
        playerScore += 1;
        score.textContent = playerScore;
        // console.log(wol);
    }
    if(wol === 0){
        youOrComputer.textContent = 'YOU LOSE';
        playAgainbtn.style.color = 'hsl(349, 71%, 52%)';
        setInterval(winBox.classList.remove('hidden'),1000);
        if(playerScore > 0){
            playerScore -= 1;
        }
        score.textContent = playerScore;
        // console.log(wol);
    }
}   


