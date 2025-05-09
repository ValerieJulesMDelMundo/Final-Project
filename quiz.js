var currentQuestion = 0;
var score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    var quizContainer = document.getElementById("quiz-container");
    var questions = [
        { q: "What are SDGs?", options: ["Super Development Goals", "Sustainable Development Goals", "Social Determination Goals", "Scientific Development Goals"], correct: 1 },
        { q: "What is the focus of SDG 3?", options: ["Quality Education", "Good Health and Well-being", "Gender Equality", "Affordable Energy"], correct: 1 },
        { q: "Which organization plays a major role in global health?", options: ["UNICEF", "WHO", "FAO", "UNESCO"], correct: 1 },
        { q: "What is a key aspect of SDG 3?", options: ["Better Roads", "Space Exploration", "Healthcare Access", "Wildlife Protection"], correct: 2 },
        { q: "Why is prenatal care important?", options: ["It prevents climate change", "It prevents complications during pregnancy", "It improves test scores", "It reduces traffic congestion"], correct: 1 }
    ];

    if (currentQuestion >= questions.length) {
        quizContainer.innerHTML = "<h2>Quiz Completed!</h2><p>You got " + score + " out of " + questions.length + " right!</p><button onclick='startQuiz()'>Try Again</button>";
        return;
    }
    
    var q = questions[currentQuestion];
    var buttons = "";
    for (var i = 0; i < q.options.length; i++) {
        buttons += "<button onclick='checkAnswer(" + i + ")'>" + q.options[i] + "</button><br>";
    }
    quizContainer.innerHTML = "<h3>" + q.q + "</h3>" + buttons + "<p id='result'></p>";
}

function checkAnswer(selectedIndex) {
    var questions = [1, 1, 1, 2, 1];
    var result = document.getElementById("result");
    
    if (selectedIndex === questions[currentQuestion]) {
        result.innerText = "Correct!";
        result.style.color = "green";
        score++;
    } else {
        result.innerText = "Incorrect!";
        result.style.color = "red";
    }
    
    setTimeout(function() {
        currentQuestion++;
        showQuestion();
    }, 1000);
}
