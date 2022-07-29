const clock = document.querySelector(".title__clock span");

function clockHandler() {
    const hour = String(new Date().getHours()).padStart(2,"0");
    const minute = String(new Date().getMinutes()).padStart(2,"0");
    const second = String(new Date().getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hour} : ${minute} : ${second}`;
}

setInterval(clockHandler, 1000);