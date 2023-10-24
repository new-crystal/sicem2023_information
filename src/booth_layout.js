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
const img_3f = document.querySelector(".img_3f")
const img_b1 = document.querySelector(".img_b1")
const platinumSponsorList = document.querySelectorAll(".platinum_sponsor");
const goldSponsorList = document.querySelectorAll(".gold_sponsor");
const silverSponsorList = document.querySelectorAll(".silver_sponsor");
const bronzeSponsorList = document.querySelectorAll(".bronze_sponsor")
const standardSponsorList = document.querySelectorAll(".standard_sponsor")
const footer = document.querySelector(".footer")


footer.addEventListener("click", ()=>{
  window.location.href = "index.html"
})

detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})

sponsorMenu.addEventListener("click", (e)=>{
    //  location.href = `?sponsor=${e.target.id}`
    const grade = e.target.id;
	sponsor_logo.removeAttribute('src');
    if(grade === "platinum"){
        backgroundImg.src = "./assets/booth_layout/booth_layout_p_1.png"
        img_3f.style.display = "";
        img_b1.style.display = "none";
        mark.style.display = "none"

        platinum_menu_container.style.display = ""
        gold_menu_container.style.display = "none"
        silver_menu_container.style.display = "none"
        bronze_menu_container.style.display = "none"
        standard_menu_container.style.display = "none"
    }
    if(grade === "gold"){
        backgroundImg.src = "./assets/booth_layout/booth_layout_g_1.png"
        img_3f.style.display = "";
        img_b1.style.display = "none";
        mark.style.display = "none"

        platinum_menu_container.style.display = "none"
        gold_menu_container.style.display = ""
        silver_menu_container.style.display = "none"
        bronze_menu_container.style.display = "none"
        standard_menu_container.style.display = "none"
    }
    if(grade === "silver"){
        backgroundImg.src = "./assets/booth_layout/booth_layout_s_1.png"
        img_3f.style.display = "none";
        img_b1.style.display = "";
        mark.style.display = "none"

        platinum_menu_container.style.display = "none"
        gold_menu_container.style.display = "none"
        silver_menu_container.style.display = ""
        bronze_menu_container.style.display = "none"
        standard_menu_container.style.display = "none"
  
    }
    if(grade === "bronze"){
        backgroundImg.src = "./assets/booth_layout/booth_layout_b_1.png"
        img_3f.style.display = "none";
        img_b1.style.display = "";
        mark.style.display = "none"

        platinum_menu_container.style.display = "none"
        gold_menu_container.style.display = "none"
        silver_menu_container.style.display = "none"
        bronze_menu_container.style.display = ""
        standard_menu_container.style.display = "none"
    }
    if(grade === "standard"){
        backgroundImg.src = "./assets/booth_layout/booth_layout_etc_1.png"
        img_3f.style.display = "none";
        img_b1.style.display = "";
        mark.style.display = "none"

        platinum_menu_container.style.display = "none"
        gold_menu_container.style.display = "none"
        silver_menu_container.style.display = "none"
        bronze_menu_container.style.display = "none"
        standard_menu_container.style.display = ""
    }
})

const loadBoothLayout = ()=>{
    backgroundImg.src = "./assets/booth_layout/booth_layout_p_1.png"
    gold_menu_container.style.display = "none"
    silver_menu_container.style.display = "none"
    bronze_menu_container.style.display = "none"
    standard_menu_container.style.display = "none"
    img_3f.style.display = "";
    img_b1.style.display = "none";
    mark.style.display = "none"
}


platinum_menu_container.addEventListener("click", (e)=>{


    const target = e.target.id;
    if(target){
        backgroundImg.src = "./assets/booth_layout/booth_layout_p.png"
        img_3f.style.display = "";
        img_b1.style.display = "none";

        mark.style.display = "";
        mark.classList.replace(mark.classList[0],target)
        sponsor_logo.src = `./assets/sponsor/${target}.png`
        
        platinumSponsorList.forEach((sponsor)=>{
            if(sponsor.id === target){
                sponsor.style.backgroundImage = `url(./assets/sponsor/${target}_1.png)`;
            }else{
                sponsor.style.backgroundImage = ``;
            }
        })
    }
})

gold_menu_container.addEventListener("click", (e)=>{
    const target = e.target.id;

    if(target){
        backgroundImg.src = "./assets/booth_layout/booth_layout_g.png"

        if(target !== "g_6" && target !== "g_7" && target !== "g_8" ){
            img_3f.style.display = "";
            img_b1.style.display = "none";
        }
        else{
            img_3f.style.display = "none";
            img_b1.style.display = "";
        }
        mark.style.display = "";
        mark.classList.replace(mark.classList[0],target)
        sponsor_logo.src = `./assets/sponsor/${target}.png`
        goldSponsorList.forEach((sponsor)=>{
            if(sponsor.id === target){
                sponsor.style.backgroundImage = `url(./assets/sponsor/${target}_1.png)`;
            }else{
                sponsor.style.backgroundImage = ``;
            }
        })
    }
})

silver_menu_container.addEventListener("click", (e)=>{
       
    const target = e.target.id;
    if(target){
        backgroundImg.src = "./assets/booth_layout/booth_layout_s.png"
            img_3f.style.display = "none";
            img_b1.style.display = "";
    
        mark.style.display = "";
        mark.classList.replace(mark.classList[0],target)
        sponsor_logo.src = `./assets/sponsor/${target}.png`
        silverSponsorList.forEach((sponsor)=>{
            if(sponsor.id === target){
                sponsor.style.backgroundImage = `url(./assets/sponsor/${target}_1.png)`;
            }else{
                sponsor.style.backgroundImage = ``;
            }
        })
    }
})

bronze_menu_container.addEventListener("click", (e)=>{
        
    const target = e.target.id;
    if(target){
        backgroundImg.src = "./assets/booth_layout/booth_layout_b.png"
            img_3f.style.display = "none";
            img_b1.style.display = "";
    
        mark.style.display = "";
        mark.classList.replace(mark.classList[0],target)
        sponsor_logo.src = `./assets/sponsor/${target}.png`
        bronzeSponsorList.forEach((sponsor)=>{
            if(sponsor.id === target){
                sponsor.style.backgroundImage = `url(./assets/sponsor/${target}_1.png)`;
            }else{
                sponsor.style.backgroundImage = ``;
            }
        })
    }
})

standard_menu_container.addEventListener("click", (e)=>{
            
    const target = e.target.id;
    if(target){
        backgroundImg.src = "./assets/booth_layout/booth_layout_etc.png"
            img_3f.style.display = "none";
            img_b1.style.display = "";
    
        mark.style.display = "";
        mark.classList.replace(mark.classList[0],target)
        sponsor_logo.src = `./assets/sponsor/${target}.png`
        standardSponsorList.forEach((sponsor)=>{
            if(sponsor.id === target){
                sponsor.style.backgroundImage = `url(./assets/sponsor/${target}_1.png)`;
            }else{
                sponsor.style.backgroundImage = ``;
            }
        })
    }
})

window.onload = loadBoothLayout()


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