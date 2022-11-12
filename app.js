"use strict"



const body = document.querySelector('body')
const dark = document.getElementById('dark')
const navBar = document.getElementById('navBar')
const menu = document.getElementById('menu')
menu.addEventListener('click' ,function(){
    navBar.classList.toggle('dark_light')
})

dark.addEventListener('click' , function(){
    dark.classList.toggle('notDark')
    body.classList.toggle('full-back')
    navBar.classList.toggle('back')
})
