"use strict"

const program_menu = document.querySelectorAll(".program_menu")
const program_day_menu = document.querySelector(".subMenu")
const detailMenuList = document.querySelectorAll(".detail_menu");
const day1 = document.querySelector(".day1");
const day2 = document.querySelector(".day2");
const day3 = document.querySelector(".day3");

const program_1_btn = document.querySelector(".program_1_btn");
const program_2_btn = document.querySelector(".program_2_btn")

program_1_btn.addEventListener("click", ()=>{
    window.location.href = "program.html"
})

program_2_btn.addEventListener("click", ()=>{
    window.location.href = "scientific_program.html"
})

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})

program_day_menu.addEventListener("click", ()=>{
    divideDay()
})

function divideDay(){
    if(window.location.search === "?day=all" || window.location.search === ""){
        program_day_menu.childNodes[1].classList.add("on")
        program_day_menu.childNodes[3].classList.remove("on")
        program_day_menu.childNodes[5].classList.remove("on")
        program_day_menu.childNodes[7].classList.remove("on")
        day1.style.display = "";
        day2.style.display = "";
        day3.style.display = "";

       } else if(window.location.search === "?day=1"){
        program_day_menu.childNodes[1].classList.remove("on")
        program_day_menu.childNodes[3].classList.add("on")
        program_day_menu.childNodes[5].classList.remove("on")
        program_day_menu.childNodes[7].classList.remove("on")

        day1.style.display = "";
        day2.style.display = "none";
        day3.style.display = "none";

       }else if(window.location.search === "?day=2"){
            program_day_menu.childNodes[1].classList.remove("on")
            program_day_menu.childNodes[3].classList.remove("on")
            program_day_menu.childNodes[5].classList.add("on")
            program_day_menu.childNodes[7].classList.remove("on")

            day1.style.display = "none";
            day2.style.display = "";
            day3.style.display = "none";

        }else if(window.location.search === "?day=3"){
            program_day_menu.childNodes[1].classList.remove("on")
            program_day_menu.childNodes[3].classList.remove("on")
            program_day_menu.childNodes[5].classList.remove("on")
            program_day_menu.childNodes[7].classList.add("on")

            day1.style.display = "none";
            day2.style.display = "none";
            day3.style.display = "";
        }
}

window.onload = divideDay()

    /**우클릭 방지 */
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    }, false);

          /**확대 축소 방지 */
          document.body.addEventListener('touchstart', function(e) {
            if ( (e.touches.length > 1) || e.targetTouches.length > 1) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
            }
          }, {passive: false});

          // 선택을 방지합니다.
document.addEventListener("selectstart", function (event) {
    event.preventDefault(); // 선택을 방지합니다.
});