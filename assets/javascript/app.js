$(document).ready(function() {


    // timer count
    var count = 61;
    // Variables for answers
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    //audio
    var audio = document.createElement("audio");
    audio.setAttribute('src', "assets/audio/simpsong.wav");


    //Start the game with hidden divs
    audio.play();

    $(".gameplay").hide();
    $(".finishContainer").hide();


    $("#startBtn").on('click', function() {

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second  

        // Hides the start div
        $(".startContainer").hide();
        $(".finishContainer").hide();
        // Shows the main div
        $(".gameplay").show();
        timer();

   });

    // Countdown function 

    function timer() {
    
        count--;
        if (count == 1) {
            clearInterval(count);
            //counter ended, do something here
            $(".gameplay").hide();
            $(".startContainer").hide();
            $(".finishContainer").show();
            return;
        }
        $('#countdown').html(" Time remaining: " + count + " seconds ");
        //code showing the number of seconds 


        $("#doneBtn").on("click", function() {
            $(".gameplay").hide();
            $(".finishContainer").show();
            clearInterval(count);
            return;



        });

        if (count == 0) {


            $(".gameplay").hide();
            $(".finishContainer").show();
        }

    }

    //    var Questions = [
     //    {
     //        q: "whats your name",
     //        1: "will",
     //        2: "bill",
     //        3: "jill",
     //        4: "kill"
     //        Answer: 1
     //    },

     //    ]
     // function placesonSreen(){

     // }


    // Gameplay to determine Correct/ Incorrect / Unanswered 
    $('input:radio').click(function() {

var Q1 = ($('input:radio[name="q1"]:checked').val());

              console.log("78",Q1 );
              if (Q1 === 1) {
            correctAnswers++;
            console.log(correctAnswers);
  
    
        } else if ( Q1 === undefined) {
            unanswered++;

            console.log(unanswered);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }


var Q2 = ($('input:radio[name=q2]:checked').val());

        if (Q2 == "1") {

            correctAnswers++;
            console.log(unanswered);

        } else if (typeof Q2 == undefined) {
            unanswered++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }


var Q3 = ($('input:radio[name=q3]:checked').val());



        if (Q3 == "1") {
            correctAnswers++;
            console.log(unanswered);

        } else if (Q3 == undefined) {
            unanswered++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }


var Q4 = ($('input:radio[name=q4]:checked').val());



        if (Q4 == undefined) {
            unanswered++;
            console.log(unanswered);

        } else if (Q4 == "2") {
            correctAnswers++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }

var Q5 = ($('input:radio[name=q5]:checked').val());



        if (Q5 == undefined) {
            unanswered++;
            console.log(unanswered);

        } else if (Q5 == "2") {
            correctAnswers++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }

var Q6 = ($('input:radio[name=q6]:checked').val());



        if (Q6 == undefined) {
            unanswered++;
            console.log(unanswered);

        } else if (Q6 == "2") {
            correctAnswers++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }

var Q7 = ($('input:radio[name=q7]:checked').val());



        if (Q7 == undefined) {
            unanswered++;
            console.log(unanswered);

        } else if (Q7 == "2") {
            correctAnswers++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }
var Q8 = ($('input:radio[name=q8]:checked').val());



        if (Q8 == undefined) {
            unanswered++;
            console.log(unanswered);

        } else if (Q8 == "2") {
            correctAnswers++;

            console.log(correctAnswers);
        } else {

            incorrectAnswers++;

            console.log(incorrectAnswers);
        }


        $('#correctAnswers').html("Correct Answers : " + correctAnswers);
        $('#incorrectAnswers').html("Incorrect Answers : " + incorrectAnswers);
        $('#unanswered').html("Unanswered : " + unanswered);




    });





});
