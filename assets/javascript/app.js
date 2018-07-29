$(document).ready(function () {

    let quizContainer = document.getElementById('quiz');
    let resultsContainer = document.getElementById('results');
    let submitButton = document.getElementById('submit');

    var quizOver = function(){
        alert(`${score} out of ${questions.length}`)
    }


    $("#submit").click(results)

    var questions = [
        {
            question: "Who is the president of France?",
            answers: {
                a: "Emmanuel Macron",
                b: "Jaques Couseau",
                c: "Tony Parker",
            },
            correct_answer: "a",
        },
        {

            question: "What is Mario's brother's name?",
            answers: {
                a: "Bowser",
                b: "Green Mario",
                c: "Luigi",
            },
            correct_answer: "c",
        },
        {
            question: "How many planets are there in the solar system?",
            answers: {
                a: 9,
                b: 7,
                c: 8,
            },
            correct_answer: "c",
        },
        {
            question: "Who won the 2001 World Series?",
            answers: {
                a: "Arizona Diamondbacks",
                b: "New York Yankees",
                c: "St. Louis Cardinals",
            },
            correct_answer: "a",
        },
        {
            question: "Who wrote To Kill a Mockingbird?",
            answers: {
                a: "Orson Wells",
                b: "Harper Lee",
                c: "Jennifer Simmons",
            },
            correct_answer: "b"
        }
    ]

    var makeQuiz = function () {
        let output = []

        questions.forEach(
            (currentQues, questNum) => {
                const answers = []

                for (letter in currentQues.answers) {
                    answers.push(
                        `<label>
                        <input type="radio" name="question${questNum}" value="${letter}">
                        ${letter} :
                        ${currentQues.answers[letter]}
                      </label>`
                    );
                }
                output.push(
                    `<div class="question"> ${currentQues.question} </div>
                        <div class="answers"> ${answers.join('')} </div>`
                );

            })
        quizContainer.innerHTML = output.join('');
    }
    makeQuiz()
    var score = 0;

    var results = function () {
        let answerGrp = quizContainer.querySelectorAll('.answers');



        questions.forEach((currentQues, questNum) => {
            let answerGrps = answerGrp[questNum]
            let select = 'input[name=question' + questNum + ']:checked';
            let userAnswer = (answerGrps.querySelector(select) || {}).value;

            if (userAnswer === currentQues.correct_answer) {
                score++
            }
        })
        resultsContainer.innerHTML = `${score} out of ${questions.length}`;
    }

    submitButton.addEventListener("click", results);

    setTimeout(results, 8000)


})
