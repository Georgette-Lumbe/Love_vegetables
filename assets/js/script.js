//Getting all required elements

const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = rules_box.querySelector(".buttons .quit");
const continue_btn = rules_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

// If Start Quiz Buttton clicked
start_btn.onclick = ()=>{
    rules_box.classList.add("activeRule"); //show the instructions box
}

// If Exit Buttton clicked
exit_btn.onclick = ()=>{
    rules_box.classList.remove("activeRule"); //hide the instructions box
}

// If Continue Buttton clicked
continue_btn.onclick = ()=>{
    rules_box.classList.remove("activeRule"); //hide the instructions box
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0);

}

let que_count = 0;

const next_btn = quiz_box.querySelector('.next_btn');

//If Next Button clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        showQuestions(que_count);
    } else {
        console.log("Completed");
    }
}

//Getting questions and options from array
function showQuestions(index){
    const questions_text = document.querySelector('.questions_text');
    const option_list = document.querySelector('.option_list');
    let que_tag = '<span>'+ questions[index].numb + '. ' + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questions_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}
