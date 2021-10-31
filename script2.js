let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")

let plus = document.querySelector(".plus")
let  minus= document.querySelector(".minus")
let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let result = document.querySelector(".result")

plus.addEventListener("click", () => {
    result.innerHTML = +num1.value + +num2.value
    
    
   })
   minus.addEventListener("click", () => {
    result.innerHTML = num1.value - num2.value
    
    
   })
   multiply.addEventListener("click", () => {
    result.innerHTML = num1.value * num2.value
    
    
   })
   divide.addEventListener("click", () => {
    result.innerHTML = num1.value / num2.value
    
    
   })
