function userInput() {

    let userName = prompt("Halt! Who Goes There?");
    console.log(userName);
    if (userName == false) {
        userName = prompt("Last Chance Buddy, Who Are Ya?");
    }
    if (userName != false) {
        alert("Welcome to the Thunderdome, " + userName + "!");
    }
    else if (userName == false) {
        alert("GET LOST, NERD!");
    }
    document.write("Check out all the pros and cons of Idaho, " + userName + "!")
}