"use strict"

const menuboxList = document.querySelectorAll(".main_menu");

menuboxList.forEach((menu)=>{
    menu.addEventListener("click", ()=>{
        window.location.href = `${menu.id}.html`
    })
})