
function calculateWater() {

    let litres = document.getElementById("litres").value;

    if (litres === "" || litres <= 0) {
        document.getElementById("result").innerHTML =
            "Please enter a valid number!";
    }
    else {
        let weekly = litres * 7;
        let monthly = litres * 30;

        document.getElementById("result").innerHTML =
            "Daily Saving: " + litres + " litres<br>" +
            "Weekly Saving: " + weekly + " litres<br>" +
            "Monthly Saving: " + monthly + " litres";
    }

}

let score = 0;

let answered = [false, false, false];

function checkAnswer(question, answer) {

    if (answered[question - 1] === true) {
        return;
    }

    answered[question - 1] = true;

    if (answer === "correct") {
        score++;
    }

    document.getElementById("quizResult").innerHTML =
        "Your score: " + score + " / 3";
}
