// select portal button
const loginBtn = document.querySelector(".header-login-btn")
const loginModal = document.querySelector(".login-page")
const login = document.querySelector(".login-button")
const signup = document.querySelector(".register-form")
const signupBtn = document.querySelector(".signupBtn")

loginBtn.addEventListener("click",e=>{
    e.preventDefault()
    loginModal.classList.toggle("--hide")
})

signupBtn.addEventListener("click",e=>{
    signup.classList.toggle("--hide")
})
document.querySelector(".header-img-first").addEventListener("click",e=>{
    signup.classList.add("--hide")
    loginModal.classList.add("--hide")
})
login.addEventListener("click", ()=>{
    window.location.href = "./koblingsordre/koblingsordre.html"
})