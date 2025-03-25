let inputSlider=document.getElementById("inputSlider")
let sliderValue=document.getElementById("sliderValue")
let passBox=document.querySelector(".passBox")
let lowercase=document.getElementById("lowercase")
let uppercase=document.getElementById("uppercase")
let numbers=document.getElementById("numbers")
let symbols=document.getElementById("symbols")
let genBtn=document.querySelector(".genBtn")
let copyIcon=document.getElementById("copyIcon")

 
//showing input slider value
sliderValue.innerHTML=inputSlider.value
inputSlider.addEventListener("input",()=>{
    sliderValue.innerHTML=inputSlider.value
})

genBtn.addEventListener("click",()=>{
    passBox.value=GeneratePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers="0123456789";
let allSymbols="!@#$%&*_+"

//function to generate passward
function GeneratePassword(){
    let genPassword="";
    let allChars="";
    if (lowercase.checked) {
        allChars += lowerChars;
    }
     if (uppercase.checked) {
        allChars += upperChars;
    }
     if (numbers.checked) {
        allChars += allNumbers;
    }
     if (symbols.checked) {
        allChars += allSymbols;
    }
    
    if(allChars=="" || allChars.length==0){
        return genPassword;
    }    

    let i=1;
    while(i<=inputSlider.value){
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length))
        i++;
    }

    return genPassword;
}
copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length >=1){ //if passBox is not empty and passBox value is >1
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});