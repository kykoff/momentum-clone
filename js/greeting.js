// DOM
const title = document.querySelector(".title");
const greeting = document.querySelector(".title__greeting");
const mustTitleBox = document.querySelector(".must-form__title");
const must = document.querySelector(".must");
const mustTitle = document.querySelector(".must-title");
const email = document.querySelector(".user-email");
const emailBtn = document.querySelector(".user-email a");
const footer = document.querySelector("footer");
const mustFormBox = document.querySelector(".must-form__input");


const nameForm = document.querySelector(".name-form");
const emailForm = document.querySelector(".email-form");
const passwordForm = document.querySelector(".password-form");
const mustForm = document.querySelector(".must-form");



const nameInput = document.querySelector(".name-form input");
const emailInput = document.querySelector(".email-form input");
const passwordInput = document.querySelector(".password-form input");
const mustFormInput = document.querySelector(".must-form__input input");


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

function paintEmail(email) {
    const span = document.createElement("span");
    span.innerHTML = `${email}       <i class="fa-solid fa-envelope"></i>`;
    emailBtn.appendChild(span);
}


function emailSubmitHandler(e) {
    e.preventDefault();
    localStorage.setItem("email", emailInput.value);
    const userEmail = emailInput.value;
    emailInput.value="";
    emailForm.classList.add(HIDDEN);
    passwordForm.classList.remove(HIDDEN);
    paintEmail(userEmail);
}


function passwordSubmitHandler(e) {
    e.preventDefault();
    localStorage.setItem("password", passwordInput.value);
    passwordInput.value="";
    passwordForm.classList.add(HIDDEN);
    mustForm.classList.remove(HIDDEN);
    footer.classList.remove(HIDDEN);
    paintTitle();
}

// Painter
function paintTitle() {
    const userName = localStorage.getItem("name");
    title.classList.remove(HIDDEN);
    mustForm.classList.remove(HIDDEN);

    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        greeting.innerHTML = `Good morning, ${userName}.`;
    } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = `Good afternoon, ${userName}.`;
    } else if (hour >= 18 && hour < 22) {
        greeting.innerHTML = `Good evening, ${userName}.`;
    } else {
        greeting.innerHTML = `Good night, ${userName}.`;
    }
    
}

// get info from local storage
const savedUserName = localStorage.getItem("name");
const savedUserEmail = localStorage.getItem("email");
const savedUserPassword = localStorage.getItem("password");


if (savedUserName !== null && savedUserEmail !== null && savedUserPassword !== null) {
    nameForm.classList.add(HIDDEN);
    emailForm.classList.add(HIDDEN);
    passwordForm.classList.add(HIDDEN);
    footer.classList.remove(HIDDEN);
    paintTitle();
    paintEmail(savedUserEmail);
} else {
    title.classList.add(HIDDEN);
    nameForm.addEventListener("submit",nameSubmitHandler);
    emailForm.addEventListener("submit",emailSubmitHandler);
    passwordForm.addEventListener("submit",passwordSubmitHandler);
}

// 모든 정보가 다 있을 때만 title이 표시되도록
// 하나라도 없으면 그냥 처음부터 하도록 

function saveMustDo(mustDo) {
    localStorage.setItem("must", mustDo);
}

function deleteMustDo(e) {
    const h1 = e.target.parentElement;
    h1.remove();
    localStorage.removeItem("must");
    mustFormBox.classList.remove(HIDDEN);
    mustTitleBox.classList.add(HIDDEN);
}

function paintMustDo(mustDo) {
    const h1 = document.createElement("h1");
    const x = document.createElement("button");
    h1.innerText = mustDo;
    x.innerText = "x";
    x.addEventListener("click", deleteMustDo);
    must.appendChild(h1);
    h1.appendChild(x);
}

function mustFormHandler(e) {
    e.preventDefault();
    mustFormBox.classList.add(HIDDEN);
    mustTitleBox.classList.remove(HIDDEN);
    const mustDo = mustFormInput.value; 
    mustFormInput.value="";
    paintMustDo(mustDo);
    saveMustDo(mustDo);
}

mustForm.addEventListener("submit", mustFormHandler);

const getMustDo = localStorage.getItem("must");

if (getMustDo !== null) {
    mustFormBox.classList.add(HIDDEN);
    mustTitleBox.classList.remove(HIDDEN);
    paintMustDo(getMustDo);
}


// 좀 더 깔끔하게 클래스 정리
// 새로고침 하지 않아도 must do 뜨도록
// email
// weather
// geolocation
