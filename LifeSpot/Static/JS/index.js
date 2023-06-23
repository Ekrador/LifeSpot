let session = new Map();

function checkAge() {
    session.set("age", prompt("Введите ваш возраст"));
    if (session.get("age") < 18)
        window.location.href = "http://www.google.com"
    else 
        alert("Приветствуем на LifeSpot, текущее время: " + new Date().toLocaleString());
}

function handleSession() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}

let sessionLog = function sessionLoger() {
    for (let userInfo of session) {
        console.log(userInfo)
    }
}

const userInput = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase()
}

function filter() {
    let elements = document.getElementsByClassName('video-container');
    for (let i = 0; i < elements.length; i++) {
        let elementText = elements[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (elementText.includes(userInput())) {
            elements[i].style.display = 'inline-block';
        }
        else {
            elements[i].style.display = 'none';
        }
    }
}