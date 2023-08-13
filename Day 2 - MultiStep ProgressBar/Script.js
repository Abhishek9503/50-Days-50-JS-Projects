const circles = document.querySelectorAll('.circle')
progressBar=document.querySelector(".indicator")
buttons= document.querySelectorAll("button")

// console.log(circles, progressBar, buttons);

let currentStep=1;

//Function that update the current stepas and updat eot dom
const updateSteps=(e)=>{
    currentStep=e.target.id === "next" ? ++currentStep :--currentStep;
    // console.log(currentStep)

    //loop through al circles and add.remove "active class bases on index and current step"
    circles.forEach((circle, index)=>{
        circle.classList[`${index<currentStep? "add" : "remove"}`]("active");
    });


    //update progress bar widht based on curren step
    progressBar.style.width = `${((currentStep-1)/ (circles.length-1))*100}%`

    //chekc is the step is last or first

    if(currentStep==circles.length){
        buttons[1].disabled=true;

    }else if(currentStep===1){
        buttons[0].disabled=true;
    }
    else{
        buttons.forEach((button)=>{
            button.disabled=false;
        })
    }

}



// add click event listerners to all buttons

buttons.forEach((button)=>{
    button.addEventListener("click",  updateSteps);
    
})