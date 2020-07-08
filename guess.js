

const guess = document.getElementById("guessingArea").value;


// let time = 30 // time start from 0
// let myTime; // timer will be assign to this variable

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

function addingResults(){
    let resultNumber = document.getElementById("guessingArea").value
    results.push(resultNumber)
    document.getElementById("results").innerHTML.value = `results: ${results}`
    
}

function guessNumber() {
    
    document.getElementById("resultArea").innerHTML = `Too low`
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
    
}



function timecounting() {
    let time = 30 // time start from 0
    let myTime; // timer will be assign to this variable
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timecount').innerHTML = time
        if (time == 0) {
            setTimeout(() => alert("You LooOOOse!!"), 100);
            clearInterval(myTime)
        }
        
    }, 1000)
    
}


