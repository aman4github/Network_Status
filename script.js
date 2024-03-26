let statusNetwork = document.querySelector(".status");
let box = document.querySelector(".statusBox");
let body = document.querySelector("body");

function check() {
    if (navigator.onLine) {
        body.style.background = "#B8D8BA";
        statusNetwork.style.color = "green";
        box.style.border = "1.5px solid green";
        statusNetwork.innerText = "Online";
    } else {
        body.style.background = "#FCAEAE";
        statusNetwork.style.color = "red";
        box.style.border = "1.5px solid red";
        statusNetwork.innerText = "Offline";
    }
}

window.addEventListener("online", (event) => {
    console.log("You are now connected to the network.");
    check();
});

window.addEventListener("offline", (event) => {
    console.log("You've lost connection to the network.");
    check();
});