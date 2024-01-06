document.addEventListener('DOMContentLoaded', function () {
    const btnLogin = document.getElementById('btnLogin');
    const loginForm = document.getElementById('loginForm');
    const btnSubmitLogin = document.getElementById('btnSubmitLogin');
    const btnCloseLogin = document.getElementById('btnCloseLogin');
    const box = document.getElementById('box');
    const resultBox = document.getElementById('resultBox');
    const startButton = document.getElementById('startButton');
    let startTime, endTime;

    
    function getRandomTime() {
        return Math.floor(Math.random() * (3000 - 1000) + 1000);
    }

    function displayBox() {
        overlay.style.zIndex= 0;
        box.style.zIndex = 2;
        box.style.backgroundColor = '#6b0000';
        box.style.cursor = 'pointer';
        box.textContent = 'CLICK!';
        startTime = new Date();
    }

    function hideBox() {
        overlay.style.zIndex= 3;
        box.style.zIndex = 2;
        box.style.backgroundColor = '#84ff65';
        box.textContent = '';
        box.style.cursor = 'default';
        setTimeout(displayBox, getRandomTime());
    }

    btnLogin.addEventListener('click', function () {
        loginForm.style.display = 'block';
    });

    btnSubmitLogin.addEventListener('click', function () {
        alert('The Feature Has not Been Implemented Yet...');
        loginForm.style.display = 'none';
    });
    btnCloseLogin.addEventListener('click', function () {
        loginForm.style.display = 'none';
    });

    function handleBoxClick() {
        endTime = new Date();
        const reactionTime = endTime - startTime;
        resultBox.textContent = `Your reaction time Was: ${reactionTime - 40} milliseconds With Ping: ${reactionTime}`;
        box.style.zIndex = 1;
        resultBox.classList.remove('hidden');
        startButton.removeAttribute('disabled');
    }

    function handleStartClick() {
        resultBox.classList.add('hidden');
        startButton.setAttribute('disabled', true);
        hideBox();
    }
    box.addEventListener('click', handleBoxClick);
    startButton.addEventListener('click', handleStartClick);
    btnLogin.addEventListener('click', function () {
        loginForm.style.display = 'block';
    });
});