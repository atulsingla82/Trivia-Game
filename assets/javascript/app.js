$(document).ready(function() {

    // timer count
    var count = 61;
   




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
        return;

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

        }
        $('#countdown').html(" Time remaining: " + count + " seconds ");
        //code showing the number of seconds 


        $("#doneBtn").on("click", function() {
            $(".gameplay").hide();
            $(".finishContainer").show();
            clearInterval(count);
            
            return;

     });
       

    }
     
    



    // Gameplay to determine Correct/ Incorrect / Unanswered 

    $('input:radio').click(function() {

        // Variables for answers

        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        var a1 = ($('input:radio[name="q1"]:checked').val());
        var a2 = ($('input:radio[name="q2"]:checked').val());
        var a3 = ($('input:radio[name="q3"]:checked').val());
        var a4 = ($('input:radio[name="q4"]:checked').val());
        var a5 = ($('input:radio[name="q5"]:checked').val());
        var a6 = ($('input:radio[name="q6"]:checked').val());
        var a7 = ($('input:radio[name="q7"]:checked').val());
        var a8 = ($('input:radio[name="q8"]:checked').val());



        for (var i = 0; i < correct.length; i++);

        // QUESTION 1
        // =================================


        if (a1 == undefined) {
            unanswered++;
            // console.log(unanswered);
        } else if (a1 == "Evergreen Terrace") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        // QUESTION 2
        // =================================

        if (a2 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a2 == "Otto") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            console.log(incorrect);
        }
        // QUESTION 3
        // =================================

        if (a3 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a3 == "Dada") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        // QUESTION 4
        // =================================

        if (a4 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a4 == "In the fridge") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        // QUESTION 5
        // =================================

        if (a5 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a5 == "Hugo") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        // QUESTION 6
        // =================================

        if (a6 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a6 == "Sideshow Mel") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        // QUESTION 7
        // =================================

        if (a7 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a7 == "Kent Brockman") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }


        // QUESTION 8
        // =================================

        if (a8 == undefined) {
            unanswered++;
            // console.log(unanswered);

        } else if (a8 == "Rancho Relaxo") {
            correct++;
            // console.log(correct);
        } else {
            incorrect++
            // console.log(incorrect);
        }

        if (count == -1) {


            $(".gameplay").hide();
            $(".finishContainer").show();
        }
        $('#correctAnswers').html("Correct Answers : " + correct);
        $('#incorrectAnswers').html("Incorrect Answers : " + incorrect);
        $('#unanswered').html("Unanswered : " + unanswered);



   

    });
  

});
