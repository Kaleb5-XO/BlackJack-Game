let cards = []
let player = {
    name: "Player",
    chips: 0,
    weight: function () {
        // player.chips += 100
    }
}
let sum = 0
let isAlive = false
let hasBlackJack = false
let message = ""
let playerStat = document.querySelector('#PlayerStat')

let cash = player.chips

playerStat.textContent = player.name + ": Br" + cash
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function weight() {
    cash += 100
}
function renderGame() {
    document.querySelector("#cards-el").textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        document.querySelector("#cards-el").textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = ("Congratulations!!! You've got Blackjack.")
        hasBlackJack = true
        weight()
    }
    else {
        message = "You're Out of the game! Try again...."
        isAlive = false
    }
    document.querySelector('#message-el').textContent = message
    document.querySelector('#sum-el').textContent = "Sum: " + sum
    console.log("BlackJack - " + hasBlackJack)
    console.log("IsAlive - " + isAlive)
}
function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        console.log("Drawing Out New Card from the deck")
        let newC = getRandomCard()
        sum += newC
        document.querySelector('#sum-el').textContent = "Sum: " + sum
        cards.push(newC)
        renderGame()
    }
}
function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum == 1) {
        return 11
    }
    else if (randomNum > 10) {
        return 10
    }
    else {
        return randomNum
    }
}






//-----------------------------------------------------------------------------------------------

// function rollDice(){
//     return Math.floor(Math.random * 6) + 1
// }
// let likesDocumentary = false
// let likesStartup = true

// if (likesDocumentary == true || likesStartup == true){
//     recommendMovie()
// }
// function recommendMovie(){
//     console.log("CHeck this movie out......")
// }




// let age = 20

// if (age <= 20){
//     console.log("You are not old enough to enter the club....")
// }
// else{
//     console.log("Welcome!")
// }

// let age = 103

// if(age === 100){
//     console.log("You will recieve your birthday card shortly...")
// }
// else if(age > 100){
//     console.log("Not Eligible! You've already recieved your birthday card")
// }
// else{
//     console.log("Not Eligible!")
// }

// console.log(4===3) //false
// console.log(5 > 2) //true
// console.log(12 > 12) //false
// console.log(3 < 0) //false
// console.log(3 >= 3) //true
// console.log(11 <= 11) //true
// console.log(3 <= 2) //false

// let myplans = [
//     'im currently learning web development',
//     'i plan to first get a job as a web developer',
//     'be INDEPENDENT',
//     'then be experienced enough to create my own company',
//     'learn how to then grow my Company'
// ]
// function buildTree() {
//     console.log(myplans.length)
//     for (let i = 0; i < myplans.length; i += 1) {
//         console.log(myplans[i])
//     }
// }

// let cards = [7,3,9]
// for (let i = 0 ;i<cards.length;i++){
//     console.log(cards[i])
// }

// let sentence = ["Hello","my",'name','is','kaleb']

// for (let i = 0 ; i < sentence.length ; i++){
//     document.getElementById('tree').innerHTML += sentence[i]+" ";
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time < player2Time)
//     return player1Time
//     else if(player1Time>player2Time)
//     return player2Time
//     else
//     return player1Time
// }

// // let fastestTime = getFastestRaceTime()
// // console.log(fastestTime)
// let lab1 = 211
// let lab2 = 261

// function getTotalTime(){
//     return lab1 + lab2
// }
// let TotalTime = getTotalTime()
// console.log(TotalTime)

// let airBnbCastle = {
//     location:"in Galway",
//     roomType:"Private",
//     heading:"Live like a king in my Castle",
//     isSuperHost:true,
//     isAvailable:true,
//     Price:190,
//     rating:4.7,
//     Roominfo:["4guests","1bedroom",2],
// }

// console.log(airBnbCastle["heading"],airBnbCastle["location"],airBnbCastle["cost"])
