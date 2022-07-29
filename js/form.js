// DOM
const title = document.querySelector(".title");
const greeting = document.querySelector(".title__greeting");

const subForm = document.querySelector(".sub-form");
const nameForm = document.querySelector(".name-form");
const emailForm = document.querySelector(".email-form");
const passwordForm = document.querySelector(".password-form");

const nameInput = document.querySelector(".name-form input");
const emailInput = document.querySelector(".email-form input");
const passwordInput = document.querySelector(".password-form input");

// global variables
const HIDDEN = "hidden";

// Submit Handler
function nameSubmitHandler(e) {
    e.preventDefault();
    localStorage.setItem("name", nameInput.value);
    nameInput.value="";
    nameForm.classList.add(HIDDEN);
    emailForm.classList.remove(HIDDEN);
}


function emailSubmitHandler(e) {
    e.preventDefault();
    localStorage.setItem("email", emailInput.value);
    emailInput.value="";
    emailForm.classList.add(HIDDEN);
    passwordForm.classList.remove(HIDDEN);
}


function passwordSubmitHandler(e) {
    e.preventDefault();
    localStorage.setItem("password", passwordInput.value);
    passwordInput.value="";
    passwordForm.classList.add(HIDDEN);
    paintTitle();
}

// Painter
function paintTitle() {
    const userName = localStorage.getItem("name");
    title.classList.remove(HIDDEN);
    subForm.classList.remove(HIDDEN);
    greeting.innerHTML = `Hello ${userName}`;
}

// get info from local storage
const savedUserName = localStorage.getItem("name");
const savedUserEmail = localStorage.getItem("email");
const savedUserPassword = localStorage.getItem("password");


if (savedUserName !== null && savedUserEmail !== null && savedUserPassword !== null) {
    nameForm.classList.add(HIDDEN);
    emailForm.classList.add(HIDDEN);
    passwordForm.classList.add(HIDDEN);
    paintTitle();
} else {
    title.classList.add(HIDDEN);
    nameForm.addEventListener("submit",nameSubmitHandler);
    emailForm.addEventListener("submit",emailSubmitHandler);
    passwordForm.addEventListener("submit",passwordSubmitHandler);
}

// 모든 정보가 다 있을 때만 title이 표시되도록
// 하나라도 없으면 그냥 처음부터 하도록 


