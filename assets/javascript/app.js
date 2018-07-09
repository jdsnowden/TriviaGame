$(document).ready(function () {
    // create the API paths to generate questions *Note can only gernerate questions every 10 min. 
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response)
        let catergories = response.results
        for (let i = 0; i < catergories.length; i++) {
            // console.log(catergories[i]['question'])
            //console.log(catergories[i]['incorrect_answers'] + catergories[i]['correct_answer'])       
            var answerChoice = [catergories[i]['incorrect_answers'] + catergories[i]['correct_answer']]
            console.log(answerChoice)
        }

        //create the question logic w/ all answers changing their order. 
        function populate(params) {
            if (quiz.isEnded()) {
                //showScores ();
            } else {
                // show next question
                var element = document.getElementById("");
                element.innerHTML = quiz.getquestionIndex().text
                // show chices
                var choices = quiz.getQuestionIndex().choices;
            }
            }
        })
        //Scoring Principals
        function quiz(questions) {
            this.score = 0;
            this.questions = questions;
            this.questionIndex = 0
        }
        quiz.prototype.getQuestionIndex = function () {
            return this.questions[this.questionIndex];
        }
        quiz.prototype.isEnded = function () {
            return this.questions.length === this.questionIndex;
        }
        quiz.prototype.guess = function (answer) {
            this.questionIndex++;
            
            if (this.getQuestionIndex().correctAnswer(answer)) {
                this.score++
            }
        }
        




});