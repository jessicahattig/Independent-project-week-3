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
    return testArray
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