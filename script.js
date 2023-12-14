function checkAnswer() {
    const answer = document.getElementById("answer-input").value;
    if (answer.toLowerCase() == "malaysia") {
        document.getElementById("result").innerHTML = "Correct!"
    } else {
        document.getElementById("result").innerHTML = "Incorrect!"
    }
}

function checkAnswer2() {
    const answer = document.getElementById("answer-input2").value;
    if (answer.toLowerCase() == "yes") {
        document.getElementById("result2").innerHTML = "Aww me too!"
    } else if (answer.toLowerCase() == "no") {
      document.getElementById("result2").innerHTML = "Why you so mean to yourself! Be confident!"
    }  else {
        document.getElementById("result2").innerHTML = "You not answering my question!!!"
    }
}