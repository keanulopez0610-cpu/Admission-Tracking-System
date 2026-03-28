console.log("SCRIPT LOADED");

let loginAttempts = 0;
let countdownTime = 180;
let countdownInterval;

function openLogin() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('welcome-screen').classList.add('blur-bg');
}

function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('welcome-screen').classList.remove('blur-bg');
}

function showDashboard() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    if (user === "" || pass === "") {
        alert("Please enter Employee ID and Password");
        return;
    }

    const validUser = "PUP Admin";
    const validPass = "15135MN0";

    if (user === validUser && pass === validPass) {

        loginAttempts = 0;

        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block';

        document.body.style.background = "#ecf0f1";

    } else {

        loginAttempts++;
        console.log("Attempts:", loginAttempts);

        if (loginAttempts === 3) {
            startTimeout();
        } else {
            alert("Wrong Credentials! Try again");
        }
    }
}

function startTimeout() {

    document.getElementById('timeout-screen').style.display = 'flex';
    document.getElementById('login-modal').style.display = 'none';

    document.querySelector('.nav-login-btn').disabled = true;

    countdownTime = 180;

    countdownInterval = setInterval(() => {

        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('countdown').innerText = minutes + ":" + seconds;

        countdownTime--;

        if (countdownTime < 0) {
            clearInterval(countdownInterval);

            document.getElementById('timeout-screen').style.display = 'none';
            document.querySelector('.nav-login-btn').disabled = false;

            loginAttempts = 0;
        }

    }, 1000);
}
