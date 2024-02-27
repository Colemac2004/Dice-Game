//array of different images
dice_array=["/dice1.png","/dice2.png","/dice3.png","/dice4.png","/dice5.png","/dice6.png"]
//function to get a random number, max is the input for the max for the random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}

function button(){
    //uses the function above to get a random number 1-6
    var diceone=(dice_array[getRandomInt(6)])
    var dicetwo=(dice_array[getRandomInt(6)])
    //puts /image infront of the image to make it easy to navigate files
    var dice_final1=("/images"+diceone)
    var dice_final2=("/images"+dicetwo)
    
    document.querySelector(".image1").setAttribute("src",dice_final1)
    document.querySelector(".image2").setAttribute("src",dice_final2)
    //slices the number out of the image picked
    var player1=(diceone.slice(5,6));
    var player2=(dicetwo.slice(5,6));
    //sets the text below the button to who won
    if (player1 < player2){
        document.querySelector(".who-won").textContent=("Player 2 Won")
    }
    else if (player1 > player2){
        document.querySelector(".who-won").textContent=("Player 1 Won")
    }
    else if (player1==player2){
        document.querySelector(".who-won").textContent=("It is a Tie")
    }
}
button();