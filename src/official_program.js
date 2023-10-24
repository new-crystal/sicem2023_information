const detailMenuList = document.querySelectorAll(".detail_menu");
const footer = document.querySelector(".footer")

footer.addEventListener("click", ()=>{
  window.location.href = "index.html"
})

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
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

          // 선택을 방지합니다.
document.addEventListener("selectstart", function (event) {
  event.preventDefault(); // 선택을 방지합니다.
});