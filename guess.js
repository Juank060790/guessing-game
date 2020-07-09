

const guess = document.getElementById("guessingArea").value;



// let myTime; // timer will be assign to this variable
let time = 30 // time start from 0
let myTime; // timer will be assign to this variable
// array
let history = []
let results = []

// guessings left
let amountGuesssing = 5

// Random Number function
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)


// guesses remaining
document.getElementById("guess-remaining").innerHTML = `${5}`
timecounting()
addingResults()

function addingResults() {
    let resultNumber = document.getElementById("guessingArea").value
    results.push(resultNumber)
    document.getElementById("results").innerHTML.value = `results: ${results}`

}

function guessNumber() {
    let userNumber = document.getElementById("guessingArea").value

    if (history.includes(userNumber)){
        document.getElementById("resultArea").innerHTML = 'You have that number already'
        document.getElementById("guessingArea").value = ''
        return;
    }

    if (userNumber <= 0 || userNumber > 100){
        document.getElementById("resultArea").innerHTML = 'The number must be between 1 and 100'
        document.getElementById("guessingArea").value = ''
        return;
    }

    // for (i = 0; i < history.length; i++) {
    //     if (history[i] == userNumber) {
    //         document.getElementById("resultArea").innerHTML = 'You have that number already'
    //         return;
    //     }
    // }

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
    if (amountGuesssing === 0) {
        resetGame()
        clearInterval(myTime)
        alert("Time to Drink!!")
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
    let time = 30
    document.getElementById('timecount').innerHTML = `${time}`

}



function timecounting() {
    
    
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timecount').innerHTML = time
        if (time == 0) {
            setTimeout(() => alert("You LooOOOse!!"), 100);
            clearInterval(myTime)
        }

    }, 1000)

}


