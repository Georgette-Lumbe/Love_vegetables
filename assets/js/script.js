//Getting all required elements

const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = rules_box.querySelector(".buttons .quit");
const continue_btn = rules_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector('.option_list');

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

    displayQuestions(0);
    queCounter(1);

}

let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector('.next_btn');

//If Next Button clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length -1){
        que_count++;
        que_numb++;
        displayQuestions(que_count);
        queCounter(que_numb)
    } else {
        console.log("Completed");
    }
}

//Getting questions and options from array
function displayQuestions(index){
    const questions_text = document.querySelector('.questions_text');
    let que_tag = '<span>'+ questions[index].numb + '. ' + questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questions_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)')
    }
}

let tickIcon = '<div class="icon_tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon_cross"><i class="fas fa-times"></i></div>';

//Getting user answers
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add('correct')
        console.log('Good Answer');
        answer.insertAdjacentHTML('beforeend', tickIcon); //help from YouTube Tutorial
    } else {
        answer.classList.add('incorrect')
        console.log('Wrong Answer');
        answer.insertAdjacentHTML('beforeend', crossIcon);
    }

    //Disable all other options when user selects one option
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
}

//Setting total questions
function queCounter(index) {
    const questions_counter = quiz_box.querySelector('.total_question');
    let totalQuestionTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>'
    questions_counter.innerHTML = totalQuestionTag;
}