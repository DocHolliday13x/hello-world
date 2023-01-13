// Below is the assignment for 102 Class 7

// function userInput() {

//     let userName = prompt("Halt! Who Goes There?");
//     console.log(userName);
//     if (userName == false) {
//         userName = prompt("Last Chance Buddy, Who Are Ya?");
//     }
//     if (userName != false) {
//         alert("Welcome to the Thunderdome, " + userName + "!");
//     }
//     else if (userName == false) {
//         alert("GET LOST, NERD!");
//     }
//     document.write("Check out all the pros and cons of Idaho, " + userName + "!")
// }

// Below is the assignment for 102 Class 8

function getUserIdentity() {
    let userIdentity = prompt("Halt! Who Goes There?!");

    console.log(userIdentity);
    while (!userIdentity) {
        userIdentity = prompt("I'm gonna ask again, buddy... WHO ARE YOU?")
        console.log(userIdentity);
    } if (userIdentity != false) {
        alert("Welcome to the Thunderdome, " + userIdentity + "!")
    }
    document.write('Check out all the PROs and <a href="https:////www.kcsheriff.com//169//In-Custody-Report">CONs</a> of Idaho, ' + userIdentity + '!')
}

function repeatImage() {
    let userNumber = prompt("On a scale of 1 to 5, with 1 being the lowest and 5 being the highest, how would YOU rate Idaho?")
    while (userNumber < 1 || userNumber > 5) {
        userNumber = prompt("Must be a number between 1 and 5. Like, literally, 1 or 2 or 3 or 4 or even 5. Preferably 5. Yeah, go with 5.")
        console.log(userNumber);
    } 

    userNumber = parseInt(userNumber)
    console.log(userNumber)
    for (let i = 0; i < userNumber; i++) {
        document.write('<img src ="./img/idahoStateFlag2.webp"/>')
    }
}

//i = 0; userNumber && userNumber <=5; i++
// validate the user input and always handle errors first

// function CONs(){
//     let CONs = <a href="https://www.kcsheriff.com/169/In-Custody-Report"></a>
// }



// Functions are being invoked in HTML file, lines 34 and blank

// let myNumber = 5;

// for (let i = 0; i < myNumber; i++){
//     document.write("<p style='color: blue;'>"Hello"</p>)
// }

// We have to execute this for loop with an image
// function repeatImage() {
//     let userNumber = prompt("How many times do you want to see griffey on the couch?");
//     userNumber = parseInt(userNumber)
//     for (let i = 0; i < userNumber && userNumber < 8; i++) {
//         document.write('')
//     }
// }


// console.log("hello " + variableName + "!")    <-- string concat
// console.log("hello ${variableName}!")         <-- Template Literal