//Getting all required elements

let start_btn = document.querySelector(".start_btn button");
let rules_box = document.querySelector(".rules_box");
let exit_btn = rules_box.querySelector(".buttons .quit");
let continue_btn = rules_box.querySelector(".buttons .restart");

// If Start Quiz Buttton Clicked
start_btn.onclick = ()=>{
    rules_box.classList.add("active_rule"); //show the instructions box
}

// If Exit Buttton Clicked
exit_btn.onclick = ()=>{
    rules_box.classList.remove("active_rule"); //hide the instructions box
}


