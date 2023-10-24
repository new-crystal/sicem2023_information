const detailMenuList = document.querySelectorAll(".detail_menu");
const info_menu_container = document.querySelector(".info_menu_container")
const info_background = document.querySelector(".info_background")
const contentList = document.querySelectorAll(".content")
const history_pre_btn = document.querySelector(".history_pre");
const history_next_btn = document.querySelector(".history_next");
const history_img = document.querySelector(".history_img")
const carousel = document.querySelector(".carousel")
const footer = document.querySelector(".footer")
const wifi_info = document.querySelector(".wifi_info")
const preview_room = document.querySelector(".preview_room")
const registration_desk = document.querySelector(".registration_desk")
const poster = document.querySelector(".poster")
const prayer_room = document.querySelector(".prayer_room")
const history = document.querySelector(".history")

let index = 0;
let history_interval;

footer.addEventListener("click", ()=>{
    window.location.href = "index.html"
})

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})

info_menu_container.addEventListener("click",(e)=>{
 
    if(e.target.id === "history"){
        info_background.src = `./assets/sicem_info/Sinfo_${e.target.id}_1.png`
		index = 0;
		carousel.style.transform = `translate3d(0px, 0, 0)`;
		
        history.style.display = "";
    }
    else if(e.target.id){
        info_background.src = `./assets/sicem_info/Sinfo_${e.target.id}.png`
        history.style.display = "none";
    }
})


function changeBackgroundImg(){
    if(index === 0){
        info_background.src = "./assets/sicem_info/Sinfo_history_1.png"
    }
    else if (index === 3){
        info_background.src = "./assets/sicem_info/Sinfo_history_2.png"
    }
    else{
        info_background.src = "./assets/sicem_info/Sinfo_history.png"
    }
}

history_pre_btn.addEventListener("click", ()=>{
    preImg()
    changeBackgroundImg()})

history_next_btn.addEventListener("click", ()=>{
    nextImg()
    changeBackgroundImg()})

// /**자동으로 이미지 넘기기 */
// function autoNextImg(){
//     history_interval = setInterval(()=>{
//         nextImg()
//     },5000)
// }

/**이미지 다음으로 넘기기 */
function nextImg(){
 if (index !== 3){
        index +=1
    }

    carousel.style.transform = `translate3d(-${
        980 * index
      }px, 0, 0)`;
}

/**이미지 이전으로 넘기기 */
function preImg(){
 if(index !== 0){
        index -= 1;
    }
    carousel.style.transform = `translate3d(-${
        980 * index
      }px, 0, 0)`;
  
}


window.addEventListener("beforeunload", ()=>{
    clearInterval(history_interval)
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