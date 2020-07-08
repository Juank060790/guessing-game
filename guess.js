

const guess = document.getElementById("guessingArea").value;


let time = 30 // time start from 0
let myTime; // timer will be assign to this variable

// array
let history = []

// guessings left
let amountGuesssing = 5

// Random Number function
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)


// guesses remaining
document.getElementById("guess-remaining").innerHTML = `${5}`

timecounting()

function guessNumber() {
    document.getElementById("resultArea").innerHTML = `Too low`
    // 1- read the number that user types
    let userNumber = document.getElementById("guessingArea").value
    console.log(userNumber, "random", randomNumber)
    if (userNumber > randomNumber) {
        document.getElementById("resultArea").innerHTML = `Too High`
    } else if (userNumber < randomNumber) {
        document.getElementById("resultArea").innerHTML = `Too Low`
    } else if (userNumber == randomNumber) {
        document.getElementById("resultArea").innerHTML = `You are safe you Don't drink!!`
    }
    history.push(userNumber)
    document.getElementById("historyArea").innerHTML = `history: ${history}`
    document.getElementById("guessingArea").value = ''
    document.getElementById("guess-remaining").innerHTML = amountGuesssing = amountGuesssing - 1
    if (amountGuesssing === -1) {
        resetGame()
        alert("Time to Drink!!");
    }
}

function resetGame() {
    amountGuesssing = 5
    document.getElementById("guess-remaining").innerHTML = `${amountGuesssing}`
    history = []
    randomNumber = Math.floor(Math.random() * 100) + 1
    document.getElementById("historyArea").innerHTML = `history: ${history}`
    console.log(randomNumber)
    document.getElementById("guessingArea").innerHTML = ""

}


function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timecount').innerHTML = time
        if (time == 0) {
            setTimeout(() => alert("You Loose"), 100);
            clearInterval(myTime)
        }
        
    }, 1000)
    
}








// 9 - When user click the reset button, game should be reset DONE
// 9.1 - 5 Chances Done
// 9.2 - reset random number
// 9.3 - reset history (array should be empty again
// 9.4 - reset input box
// 9.5 -  reset result