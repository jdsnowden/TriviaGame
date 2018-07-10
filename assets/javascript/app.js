$(document).ready(function () {
    // create the API paths to generate questions *Note can only gernerate questions every 10 min. 
    //var questions =
    // cant get questions to pre load. 
    // not sure how to parse this and add it to the code that was supplied to populate info. 
    $.ajax({
        url: "https://opentdb.com/api.php?amount=10&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response)
        let catergories = response.results
        for (let i = 0; i < catergories.length; i++)
        var choices = [catergories[i]['incorrect_answers'].concat(catergories[i]['correct_answer'])]
        var text = [catergories[i]['question']]
        var answer = [catergories[i]['correct_answer']]

        console.log(answer)
        console.log(text)
        console.log(choices)


    });


    questions.prototype.correctAnswer = function (choice) {
        return choice === this.answer;

        function quiz(questions) {
            this.score =
                this.questions = questions
            this.questionIndex = 0
        }
        quiz.prototype.getQuestionIndex = function () {
            return this.questions[this.questionIndex]
        }
        quiz.prototype.isEnded = function () {
            return this.questions.length === this.questionIndex
        }
        quiz.prototype.guess = function (answer) {
            this.questionIndex++

            if (this.getQuestionIndex().correctAnswer(answer)) {
                this.socre++
            }
        }


        var quiz = new quiz(questions)

        function populate() {
            if (quiz.isEnded()) {
                //showScores()
            }
            else {
                //showQuestion
                var element = document.getElementById('questions')
                element.innerHTML = quiz.getQuestionIndex().text

                //show choices
                var choices = quiz.getQuestionIndex().choices;
                for (var i = 0; i < choices.length; i++) {
                    var element = document.getElementById("button" + i)
                    element.innerHTML = choices[i]
                    guess("btn" + i, choices)
                }
            }
        }
        function showscores() {
            var gameOverHtml = "<h1>result</h1>"
            gameOverHtml += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>"
            var element = document.getElementById("quiz")
            element.innerHTML = gameOverHtml;
        }
    }






})