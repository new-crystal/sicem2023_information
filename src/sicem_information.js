const detailMenuList = document.querySelectorAll(".detail_menu");
const info_menu_container = document.querySelector(".info_menu_container")
const info_background = document.querySelector(".info_background")

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

    if(location.search === ""){
        info_background.src = "./assets/sicem_info/Sinfo_wifi.png"
    }
    else if(infoMenu === "wifi"){
        info_background.src = "./assets/sicem_info/Sinfo_wifi.png"
    }
    else if(infoMenu === "preview"){
        info_background.src = "./assets/sicem_info/Sinfo_preview.png"
    }
    else if(infoMenu === "registration"){
        info_background.src = "./assets/sicem_info/Sinfo_regi.png"
    }
    else if(infoMenu === "poster"){
        info_background.src = "./assets/sicem_info/Sinfo_poster.png"
    }
    else if(infoMenu === "prayer"){
        info_background.src = "./assets/sicem_info/Sinfo_prayer.png"
    }
    else if(infoMenu === "history"){
        info_background.src = "./assets/sicem_info/Sinfo_history.png"
    }
}


window.onload = changeBackgroundImage()