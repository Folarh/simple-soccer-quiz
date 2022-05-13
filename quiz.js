

const correctanswers= ["A","B","B","A","B"];

const form= document.querySelector(".forms")
const results =document.querySelector(".rslt")

 form.addEventListener("submit",(e)=>{
     e.preventDefault();

let score=0;
const userAnswers =[form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,]

//check answers
userAnswers.forEach((answer, index)=>{
    if(answer==correctanswers[index]){
        score+=20;
       
        
    }
})
// show result on page
scrollTo(0,0);
// results.querySelector("span").textContent= `${score}%`;
results.style.display ="inline" 

// animations to result
let output=0;
const timer= setInterval(()=>{
    results.querySelector("span").textContent =`${output}%`;
    if (output===score){
        clearInterval(timer);
    }else {
        output++;
    }
 }, 10);
})

