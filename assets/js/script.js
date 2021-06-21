//Getting all required elements

let start_btn = document.querySelector(".start_btn button");
let rules_box = document.querySelector(".rules_box");
let exit_btn = rules_box.querySelector(".buttons .quit");
let continue_btn = rules_box.querySelector(".buttons .restart");
let quiz_box = document.querySelector(".quiz_box");

// If Start Quiz Buttton Clicked
start_btn.onclick = ()=>{
    rules_box.classList.add("activeRule"); //show the instructions box
}

// If Exit Buttton Clicked
exit_btn.onclick = ()=>{
    rules_box.classList.remove("activeRule"); //hide the instructions box
}

// If Continue Buttton Clicked
continue_btn.onclick = ()=>{
    rules_box.classList.remove("activeRule");
    quiz_box.classList.add("activeQuiz");
    showQuestions()

}

let que_count = 0;
function showQuestions(){
    let questions_text = document.querySelector('.questions_text');
    let que_tag = '<span>'+ questions[0].question +'</span>';
    questions_text.innerHTML = que_tag;
}
