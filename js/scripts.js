var quiz = [
    ["What is Superman's real name?","Clarke Kent"],
    ["What is Wonderwoman's real name?","Dianna Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

var score = 0; // initialize score

play(quiz);


function play(quiz) {
    //main game loop
    document.write(quiz);
    
    
    for(var i=0, question, answer, max=quiz.length; i<max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(i,answer);
        //document.write("<br /> Your answer is " + answer);
    }
    // end of main game loop
    gameOver();
}


function ask(question) {
    //document.write("<br /><br />Your question is: " + question);
    return prompt(question); //quiz[i][0] is the ith questions
}

function check(i,answer) {
    if (answer === quiz[i][1]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong!");
    }
}

function gameOver() {
    alert("game Over, you scored " + score + " points")
}