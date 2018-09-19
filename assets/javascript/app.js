$(document).ready(function() {
// create question bank with question, answer values, correct answer, and 2 hints

const questionBank = [
    {
        question: "What country flies the world's only national flag that consists solely of four horizontal color bands?",
        values: [
            "Mauritius", "France", "Brunei", "Burma"
        ],
        correctAnswer: "Mauritius",
        gifFile: 1,
        gifURL: '<iframe src="https://giphy.com/embed/dPr9th41YW82k" width="480" height="337" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dPr9th41YW82k"></a></p>',
    }, {
        question: "What country has a unique biota with about 90% of its plants and animals found nowhere else on earth?",
        values: [
            "Brazil", "Japan", "Madagascar", "Australia"
        ],
        correctAnswer: "Madagascar",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/3QdRC4W9IOcCc" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/hd-swiggity-swooty-3QdRC4W9IOcCc"></a></p>',
    }, {
        question: "The four countries that make up the Horn of Africa in eastern Africa are Somalia, Ethiopia, Eritrea, and ____________.",
        values: [
            "Uganda", "Zambia", "Sudan", "Djibouti"
        ],
        correctAnswer: "Djibouti",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/bL4h3qu3vwx1K" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/africa-bL4h3qu3vwx1K"></a></p>',
    }, {
        question: "In what country does the Amazon River originate?",
        values: [
            "Brazil", "Peru", "Colombia", "Bolivia"
        ],
        correctAnswer: "Peru",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/xPi7mXmEKQHFC" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/river-xPi7mXmEKQHFC"></a></p>',
    }, {
        question: "How many countries are in the Arabian Peninsula?",
        values: [
            "5", "7", "9", "11"
        ],
        correctAnswer: "9",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/3owzWmYO0Kc8vsrao0" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/egypt-pyramids-3owzWmYO0Kc8vsrao0"></a></p>',
    }, {
        question: "What country, with 37 languages recorded in its 2009 constitution, has the record for the most official languages?",
        values: [
            "Bolivia", "India", "China", "South Africa"
        ],
        correctAnswer: "Bolivia",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/CRSHYiVv1feo0" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/control-bolivia-paz-CRSHYiVv1feo0"></a></p>'
    }, {
        question: "What is the tallest waterfall in the world?",
        values: [
            "Niagara Falls", "Angel Falls", "Yosemite Falls", "Ramnefjellfossen"
        ],
        correctAnswer: "Angel Falls",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/fSUz68kSIc6SQ" width="383" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/angel-falls-venezuela-fSUz68kSIc6SQ"></a></p>',
    }, {
        question: "If it is 3 PM in Washington DC, what time is it in Tokyo, Japan?",
        values: [
            "3 AM", "4 AM", "5 AM", "6 AM"
        ],
        correctAnswer: "4 AM",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/8Bl2ai65p7taJtpznv" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/177milkstreet-8Bl2ai65p7taJtpznv"></a></p>',
    }, {
        question: "What is the name of the world's saltiest sea?",
        values: [
            "Red Sea", "Black Sea", "Adriatic Sea", "Mediterranean Sea"
        ],
        correctAnswer: "Red Sea",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/SzRbkOQFC0m9W" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/SzRbkOQFC0m9W"></a></p>',
    }, {
        question: "What country is the smallest country in Asia?",
        values: [
            "Lebanon", "Nepal", "South Korea", "Sri Lanka"
        ],
        correctAnswer: "Lebanon",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/krQNz0CjsqS8E" width="480" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/lebanon-krQNz0CjsqS8E"></a></p>',
    }, {
        question: "What country has the highest life expectancy at birth?",
        values: [
            "United States", "Switzerland", "Singapore", "Japan"
        ],
        correctAnswer: "Japan",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/Ki4SCfBZBGTsY" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dance-old-elderly-Ki4SCfBZBGTsY"></a></p>',
    }, {
        question: "How many countries have coastline on the Mediterranean Sea?",
        values: [
            "17", "21", "24", "29"
        ],
        correctAnswer: "21",
        gifFile: 0,
        gifURL: '<iframe src="https://giphy.com/embed/mnPhZAJOCNKec" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/greek-mnPhZAJOCNKec"></a></p>',
    },
]
// setup game variables
let correct = 0;
let incorrect = 0;
let timer = 0;
let timerInterval;
let timePerQuestion = 30;
let countQ = 0;
let wrong = false;
let unanswered = 0;
let selectedValue = "";

// establish references to document
let gameTimer = $("#game-timer");
let gameMsg = $("#game-msg");
let startBtn = $("#start-btn");
let questionView = $(".question-view");
let gameContent = $(".game-content");
let scoreView = $(".score-view");
let submitBtn = $("#submit-btn");

// on click of start button, start game
startBtn.on("click", function() {

    // reset game
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    countQ = 0;
    
    // hide start button
    startBtn.hide();

    // show submit button and gamecontent
    submitBtn.show();
    gameContent.addClass("shading border border-dark");

    // hide score from previous game
    scoreView.empty();

    // set game message
    gameMsg.html(`<strong>Think fast!</strong>`);

    // populate questions and answers on screen
    showQuestions();
});

function showQuestions() {

    // reset game message and show submit button
    gameMsg.html(`<strong>Think Fast!</strong>`);
    submitBtn.show();
    selectedValue = "";

    // reset and start timer
    startTimer();

    // set q to equal the question
    const q = questionBank[countQ].question;

    // append question and answer choices to screen
    questionView.append(
        `
            <div class="question-text text-left"><strong>Question ${countQ+1}:</strong> ${q}</div>
        `
    );

    // reset count for the index position of the values array
    let countV = 0;

    for (let i in questionBank[countQ].values) {

        // set v equal to the value
        const v = questionBank[countQ].values[countV];
        
        // append each value to the question
        questionView.append(
            `
                <button type="button" class="btn btn-block btn-outline-dark answer-value" value="${v}">${v}</button>
            `
        )
        // increment values array index position
        countV++;
    }
}

// on click of one of the answer values
$(document).on("click", ".answer-value", function(){
    console.log($(this).val());

    // save value of selected answer to variable selectedValue
    selectedValue = $(this).val();
});

// determine if correct answer is selected when submit button is clicked...
submitBtn.on("click", function() {
    tally();
});

function startTimer() {
    timer = timePerQuestion;
    clearInterval(timerInterval);
    timerInterval = setInterval(decrement, 1000);
};

function decrement() {
    // decrease timer by 1
    timer--;
    // display timer value
    gameTimer.html(`<strong>Timer: ${timer} seconds</strong>`);

    // when time hits 10
    if (timer === 3) {
        gameMsg.html(`<strong>Hurry up!!</strong>`);
    }
    // when timer hits 0
    if (timer === 0) {

        // determine score
        tally();
    };
};

function stop() {
    clearInterval(timerInterval);
};

function tally() {
    // stop timer
    stop();
    console.log(selectedValue);

    // set a equal to correct answer
    const a = questionBank[countQ].correctAnswer;

    // if selected answer equals correct answer
    if (selectedValue === a) {

        // increment correct score tally
        correct++;

        // show game message and run gif function
        gameMsg.html(`<strong>Correct!</strong>`);

    // otherwise, if answer is correct
    } else if (selectedValue === "") {
        
        // increment unanswered
        unanswered++;
        // show game message
        gameMsg.html(`<strong>You ran out of time!</strong>`);
        wrong = true;
    } else {

        // increment incorrect score tally
        incorrect++;

        // show game message and run gif function
        gameMsg.html(`<strong>Sorry! The correct answer is ${a}</strong>`);
        wrong = true;
    }
    showGif();
console.log(correct, incorrect, unanswered);

};

function showGif() {

    // stop timer
    stop();

    // hide submit button
    submitBtn.hide();

    // clear question/values and show related gif
    questionView.empty();

    if (wrong) {
        questionView.append(`<iframe src="https://giphy.com/embed/m8eIbBdkJK7Go" width="480" height="253" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/joel-mchale-incorrect-m8eIbBdkJK7Go"></a></p>`);
    } else {
        questionView.append(`${questionBank[countQ].gifURL}`);
    }

    // reset wrong flag
    wrong = false;

    // increment position index to show next question
    countQ++;

    // go to next action after delay
    setTimeout(next, 3000);
}

function next() {

    // clear gif from screen
    questionView.empty();

    // if position index of QuestionBank (i.e. countQ) is less than its length
    if (countQ < questionBank.length) {

        // show the next question
        showQuestions();
    
    // otherwise show score
    } else {
        showScore();
    }
}

function showScore () {
    // clear the questions and submit button from the screen
    questionView.empty();
    submitBtn.hide();

    // show the start button to reset the game
    startBtn.show();

    // show a game message according to the percentage correct
    if (correct/questionBank.length === 1) {
        gameMsg.html(`<strong>Perfect score</strong>`);
    } else if (correct/questionBank.length >= 0.8) {
        gameMsg.html(`<strong>Great job!</strong>`);
    } else {
        gameMsg.html(`<strong>Better luck next time</strong>`);
    }
    // show score stats
    scoreView.append (
        `
            <h3>Correct: ${correct}</h3>
            <h3>Incorrect: ${incorrect}</h3>
            <h3>Unanswered: ${questionBank.length-correct-incorrect}</h3>
            <h4>You got ${(correct/questionBank.length*100).toFixed(0)}% right!</h4>
            <p>Visit the <a href="https://www.cia.gov/library/publications/the-world-factbook/">CIA World Factbook</a> to learn facts about 267 countries</p>
        `
    )
    
};
});