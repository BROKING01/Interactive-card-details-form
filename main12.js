const form = document.querySelector("form")
const submit = document.querySelector(".submit")
const fin = document.querySelector(".fin")
const number = document.getElementById("card-num")
const holdernumber = document.getElementById("number")
const names = document.getElementById("card-name")
const holdername = document.getElementById("name")
const month = document.getElementById("exp-date-month")
const holdermonth = document.getElementById("month")
const year = document.getElementById("exp-date-year")
const holderyear = document.getElementById("year")
const cvc = document.getElementById("cvc")
const holdercvc = document.getElementById("newcvc")
const two = document.querySelector(".two")
const succes = document.querySelector(".succes")
const error1 = document.querySelector(".error1")
const error2 = document.querySelector(".error2")
const error3 = document.querySelector(".error3")
const error4 = document.querySelector(".error4")
let a
let b
let c
let d
let e

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (holdername.value === "") {
        error1.classList.remove("hidden")
    } else{
        error1.classList.add("hidden")
        a = 1
    }
    if ( !isnumber(holdernumber.value)) {
        error2.classList.remove("hidden")
    } else{
        error2.classList.add("hidden")
        b = 1
    }
    if (holdermonth.value === "") {
        error3.classList.remove("hidden")
    } else if(holdermonth.value > 30) {
        error3.classList.remove("hidden")
    } else if (holdermonth.value < 0) {
        error3.classList.remove("hidden")
    } else {
        error3.classList.add("hidden")
        error3.classList.add("hidden")
        c = 1
    }
    if (holderyear.value === "") {
        error3.classList.remove("hidden")
    } else if(holderyear.value > 2024) {
        error3.classList.remove("hidden")
    } else if (holderyear.value < 0) {
        error3.classList.remove("hidden")
    } else {
        error3.classList.add("hidden")
        error3.classList.add("hidden")
        d = 1
    }
    if (holdercvc.value === "") {
        error4.classList.remove("hidden")
    } else{
        error4.classList.add("hidden")
        e = 1
    }
    if (holdername) {
        names.innerHTML = holdername.value
    }
    if (holdermonth) {
        month.innerHTML = holdermonth.value
    }
    if (holderyear) {
        year.innerHTML = holderyear.value
    }
    if (holdercvc) {
        cvc.innerHTML = holdercvc.value
    }
    if (a === 1 & b === 1 & c === 1 & d === 1 & e === 1) {
        succes.classList.remove("hidden")
        form.style.display = "none"
    }
})
fin.addEventListener("click", () => {
    succes.classList.add("hidden")
    form.style.display = "block"
})
holdernumber.addEventListener("input", () => {
    number.innerHTML = holdernumber.value
    number.toFixed(12)
})


function isnumber(holdernumber){
    return /^\d+$/.test(holdernumber)
}