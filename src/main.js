"use strict"

const menuboxList = document.querySelectorAll(".main_menu");
const background = document.querySelector(".background");
const video = document.querySelector(".index_video");

background.addEventListener("click", ()=>{
  background.style.display = "none";
})

menuboxList.forEach((menu)=>{
    menu.addEventListener("click", ()=>{
        window.location.href = `${menu.id}.html`
    })
})


window.onload = ()=>{
  background.style.display = "block"
  video.play();
}


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

