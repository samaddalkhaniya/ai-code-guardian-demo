const userInput = "demo";

const apiKey = "demo-secret-key-12345";

function showUserInput(input) {
    document.getElementById("output").innerHTML = input;
}

function executeCode(code) {
    eval(code);
}

function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

showUserInput(userInput);
