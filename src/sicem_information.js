const detailMenuList = document.querySelectorAll(".detail_menu");
const info_menu_container = document.querySelector(".info_menu_container")
const info_background = document.querySelector(".info_background")
const contentList = document.querySelectorAll(".content")

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})

info_menu_container.addEventListener("click",(e)=>{
    location.href = `?info=${e.target.id}`
})

function changeBackgroundImage(){
    const infoMenu =  new URLSearchParams(window.location.search).get("info");
    contentList.forEach((content)=>{
        content.style.display = "none"
    })

    if(location.search === ""){
        info_background.src = "./assets/sicem_info/Sinfo_wifi.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("wifi_info")){
                content.style.display = "";
            }
        })
    }
    else if(infoMenu === "wifi"){
        info_background.src = "./assets/sicem_info/Sinfo_wifi.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("wifi_info")){
                content.style.display = "";
            }
        })
    }
    else if(infoMenu === "preview"){
        info_background.src = "./assets/sicem_info/Sinfo_preview.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("preview_room")){
                content.style.display = "";
            }
        })
    }
    else if(infoMenu === "registration"){
        info_background.src = "./assets/sicem_info/Sinfo_regi.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("registration_desk")){
                content.style.display = "";
            }
        })
    }
    else if(infoMenu === "poster"){
        info_background.src = "./assets/sicem_info/Sinfo_poster.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("poster")){
                content.style.display = "";
            }
        })
    }
    else if(infoMenu === "prayer"){
        info_background.src = "./assets/sicem_info/Sinfo_prayer.png"
        contentList.forEach((content)=>{
            if(content.classList.value.includes("prayer_room")){
                content.style.display = "";
            }
        })
        
    }
    else if(infoMenu === "history"){
        info_background.src = "./assets/sicem_info/Sinfo_history.png"
    }
}


window.onload = changeBackgroundImage()

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