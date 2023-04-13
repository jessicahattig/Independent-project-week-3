//Buisness Logic
function bleep(number){
    if (Number.isInteger(number)) {
        console.log("bleep") ///checking this in console log
    }    
}

function array(number){
    let testArray = []
    for (let i=0; i <= number; i++){
        if (i.toString().includes("3")) {
            testArray.push(" won't you be my neighbor? ")
        } else if (i.toString().includes("2")){
            testArray.push(" boop ")
        } else if (i.toString().includes("1")){
        testArray.push(" bleep ")
    } else { 
        testArray.push(i)
    }
    } 
    return testArray // return results
} 

//User Logic
window.addEventListener("load", function() {
    console.log("here")
    document.querySelector("form").addEventListener("submit", handleFormSubmission)
});

function handleFormSubmission(event){
    event.preventDefault()
    const usersInput = document.getElementById("input").value
    const outPut = array(usersInput)
    document.getElementById("result").innerText = outPut
}

///finish logic by adding test 3


// //Buisness Logic
// const one = ["bleep"]
// const two = ["boop"]
// const three = ["won't you be my neighbor?"]

// const numberInput = document.getElementById("numberInput").value;

// function bleep(numberInput, word){
//     {if (Number.isInteger){}

//         if - {return of word}
// }}
// ////

// document.getElementById("sentence").innerText = sentence;
// }

// let sentence;
// if (numberInput === "1"){
//     result= bleep;
// } else if (numberInput==="2"){
//     result = boop;
// } else (numberinput==="3"){
//     result = won't you be my neighbor?
// } 

// window.addEventListener("load", function(){
//     const form = document.getElementById("form")
//     form.addEventListener("submit",sentence)
//   });