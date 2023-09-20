const detailMenuList = document.querySelectorAll(".detail_menu");
const sponsorMenu = document.querySelector(".sponsor_menu_wrap")
const backgroundImg = document.querySelector("#sponsor_layout")
const platinum_menu_container = document.querySelector(".platinum_menu_container");
const gold_menu_container = document.querySelector(".gold_menu_container");
const silver_menu_container = document.querySelector(".silver_menu_container");
const bronze_menu_container = document.querySelector(".bronze_menu_container");
const standard_menu_container = document.querySelector(".standard_menu_container");
const sponsor_logo = document.querySelector(".sponsor_logo")
const mark =  document.querySelector(".location");

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})

sponsorMenu.addEventListener("click", (e)=>{
    location.href = `?sponsor=${e.target.id}`
})

function changeBackgroundImg(){
    const sponsorGrade = new URLSearchParams(window.location.search).get("sponsor");
const target =  new URLSearchParams(window.location.search).get("target");
    if(location.search === ""){
        backgroundImg.src = "./assets/platinum.png"
        mark.style.display = "none";
        platinum_menu_container.style.display = "";
        gold_menu_container.style.display = "none";
        silver_menu_container.style.display = "none";
        bronze_menu_container.style.display = "none";
        standard_menu_container.style.display = "none";
    }
    else if(sponsorGrade === "platinum"){
        if(target){
            backgroundImg.src = "./assets/booth_layout/booth_layout_p_1.png"
            mark.style.display = "";
            sponsor_logo.src = `./assets/sponsor/${target}.png`
        }else{
            backgroundImg.src = "./assets/platinum.png"
            mark.style.display = "none";
        }
        platinum_menu_container.style.display = "";
        gold_menu_container.style.display = "none";
        silver_menu_container.style.display = "none";
        bronze_menu_container.style.display = "none";
        standard_menu_container.style.display = "none";
    }
    else if(sponsorGrade === "gold"){
        if(target){
            backgroundImg.src = "./assets/booth_layout/booth_layout_g_1.png"
            mark.style.display = "";
            sponsor_logo.src = `./assets/sponsor/${target}.png`
        }else{
            backgroundImg.src = "./assets/booth_layout/booth_layout_g.png"
            mark.style.display = "none";
        }
        platinum_menu_container.style.display = "none";
        gold_menu_container.style.display = "";
        silver_menu_container.style.display = "none";
        bronze_menu_container.style.display = "none";
        standard_menu_container.style.display = "none";
    }
    else if(sponsorGrade === "silver"){
        if(target){
            backgroundImg.src = "./assets/booth_layout/booth_layout_s_1.png"
            mark.style.display = "";
            sponsor_logo.src = `./assets/sponsor/${target}.png`
        }else{
            backgroundImg.src = "./assets/booth_layout/booth_layout_s.png"
            mark.style.display = "none";
        }
        silver_menu_container.style.display = "";
        platinum_menu_container.style.display = "none";
        gold_menu_container.style.display = "none";
        bronze_menu_container.style.display = "none";
        standard_menu_container.style.display = "none";
    }
    else if(sponsorGrade === "bronze"){
        if(target){
            backgroundImg.src = "./assets/booth_layout/booth_layout_b_1.png"
            mark.style.display = "";
            sponsor_logo.src = `./assets/sponsor/${target}.png`
        }else{
            backgroundImg.src = "./assets/booth_layout/booth_layout_b.png"
            mark.style.display = "none";
        }
        bronze_menu_container.style.display = "";
        platinum_menu_container.style.display = "none";
        gold_menu_container.style.display = "none";
        silver_menu_container.style.display = "none";
        standard_menu_container.style.display = "none";
    }
    else if(sponsorGrade === "standard"){
        if(target){
            backgroundImg.src = "./assets/booth_layout/booth_layout_etc_1.png"
            mark.style.display = "";
            sponsor_logo.src = `./assets/sponsor/${target}.png`
        }else{
            backgroundImg.src = "./assets/booth_layout/booth_layout_etc.png"
            mark.style.display = "none";
        }
        standard_menu_container.style.display = "";
        platinum_menu_container.style.display = "none";
        gold_menu_container.style.display = "none";
        silver_menu_container.style.display = "none";
        bronze_menu_container.style.display = "none";
    }
}

platinum_menu_container.addEventListener("click", (e)=>{
    location.href = `?sponsor=platinum&target=${e.target.id}`
})

gold_menu_container.addEventListener("click", (e)=>{
    location.href = `?sponsor=gold&target=${e.target.id}`
})

silver_menu_container.addEventListener("click", (e)=>{
    location.href = `?sponsor=silver&target=${e.target.id}`
})

bronze_menu_container.addEventListener("click", (e)=>{
    location.href = `?sponsor=bronze&target=${e.target.id}`
})

standard_menu_container.addEventListener("click", (e)=>{
    location.href = `?sponsor=standard&target=${e.target.id}`
})


window.onload = changeBackgroundImg()

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