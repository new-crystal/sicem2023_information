"use strict"

const menuboxList = document.querySelectorAll(".main_menu");

menuboxList.forEach((menu)=>{
    menu.addEventListener("click", ()=>{
        window.location.href = `${menu.id}.html`
    })
})

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