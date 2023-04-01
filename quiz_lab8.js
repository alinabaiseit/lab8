$(document).ready(function(){
    // Define quiz questions and answer options
    const questions = [        {            question: "What year the Kazakh Khanate was found?",            options: ["1485", "1495", "1645", "1465"],
            answer: "1465"
        },
        {
            question: "Who was the first Khan of Kazakh Khanate?",
            options: ["Kerei Khan", "Janibek Khan", "Kenesary Khan", "Abylai Khan"],
            answer: "Kerei Khan"
        },
        {
            question: "Where the Kazakh Khanate was found?",
            options: ["Saryarka mountains", "Jetisu region", "Caspian Sea coast", "Turkestan city"],
            answer: "Jetisu region"
        }
    ];
    
    // Generate quiz questions
    const quizBox = $("#quiz-box");
    
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        quizBox.append(`<div class='question'>
                            <p class='d'> Q${i+1}. ${q.question} </p>
                            <label><input type='radio' name='q${i+1}' value='${q.options[0]}'>${q.options[0]}</label>
                            <label><input type='radio' name='q${i+1}' value='${q.options[1]}'>${q.options[1]}</label>
                            <label><input type='radio' name='q${i+1}' value='${q.options[2]}'>${q.options[2]}</label>
                            <label><input type='radio' name='q${i+1}' value='${q.options[3]}'>${q.options[3]}</label>
                       </div>`);
    }
    
    // Evaluate quiz answers
    let countCorrect = 0;
    $("button").click(function(event) {
        for (let i = 0; i < questions.length; i++) {
            const selectedOption = $(`input[name=q${i+1}]:checked`).val();
            if (selectedOption === questions[i].answer) {
                countCorrect++;
            }
        }
        quizBox.append(`<h2>Result of the quiz is: ${countCorrect}/${questions.length}</h2>`);
    });
});
