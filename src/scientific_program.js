const program_menu_container = document.querySelector(".program_menu_container")
const detailMenuList = document.querySelectorAll(".detail_menu");
const programMenuList = document.querySelectorAll(".program_menu");
const programList = document.querySelectorAll(".program")

const triggerList = document.querySelectorAll(".trigger")
const toggleConList = document.querySelectorAll(".toggleCon")

const program_1_btn = document.querySelector(".program_1_btn");
const program_2_btn = document.querySelector(".program_2_btn");

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

/** program div 눌렀을 때도 a tag 동작 */
programMenuList.forEach((program)=>{
  program.addEventListener("click",()=>{
    location.href = `?tab_num=${program.id}`
  })
})

//메뉴 파란 배경으로 바꾸기
program_menu_container.addEventListener("click",(e)=>{
  showScientificProgram()
    if (e.target.classList.contains("program_menu")) {
        programMenuList.forEach((menu) => {
            menu.classList.remove("on");
        });
        e.target.classList.add("on");
    }
})

function programMenuOn(){
  showScientificProgram()
    programMenuList.forEach((menu)=>{
        if(window.location.search.split("=")[1] === menu.id){
            menu.classList.add("on")
        }else if (window.location.search === "" && menu.id === "1"){
          menu.classList.add("on")
        }
        else{
            menu.classList.remove("on")
        }
    })
    hideToggle()
}


/**toggle animation */
triggerList.forEach((trigger)=>{
    trigger.addEventListener("click",(e)=>{
       if(e.target.parentNode.nextElementSibling.style.display !== "none"){
        e.target.parentNode.nextElementSibling.style.display = "none";
       }else{
        e.target.parentNode.nextElementSibling.style.display = "";
       }
    })
})

function hideToggle(){
    toggleConList.forEach((toggleCon)=>{
        toggleCon.style.display = "none"
    })
}

// triggerList.forEach((trigger) => {
//     trigger.addEventListener("click", function (event) {
//       event.preventDefault();
  
//       const parent = this.parentElement.parentElement;
//       const sClass = this.parentElement.getAttribute("class");
  
//       if (sClass !== "view") {
//         this.parentElement.classList.add("view");
//         const iElement = this.querySelector("i");
//         if (iElement) {
//           iElement.className = iElement.className.replace("-down", "-up");
//         }
//         const toggleCon = parent.querySelector(".toggleCon");
//         if (toggleCon) {
//           toggleCon.style.display = "block";
//         }
//       } else {
//         this.parentElement.classList.remove("view");
//         const iElement = this.querySelector("i");
//         if (iElement) {
//           iElement.className = iElement.className.replace("-up", "-down");
//         }
//         const toggleCon = parent.querySelector(".toggleCon");
//         if (toggleCon) {
//           toggleCon.style.display = "none";
//         }
//       }
//     });
//   });
  

function showScientificProgram(){
  programList.forEach((program)=>{
    
    program.style.display = "none";

    if(window.location.search === "" && program.classList.value.includes("plenary"))  {     
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=1' && program.classList.value.includes("plenary")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=2' && program.classList.value.includes("award")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=3' && program.classList.value.includes("joint")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=4' && program.classList.value.includes("special1")){
      program.style.display = "";
    }   
    else if(window.location.search === '?tab_num=5' && program.classList.value.includes("special2")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=6' && program.classList.value.includes("breakfast")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=7' && program.classList.value.includes("thyroid")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=9' && program.classList.value.includes("clinical")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=10' && program.classList.value.includes("basic")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=8' && program.classList.value.includes("bone")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=11' && program.classList.value.includes("pituitary")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=12' && program.classList.value.includes("clinical")){
      program.style.display = "";
    }
    else if(window.location.search === '?tab_num=13' && program.classList.value.includes("ultrasound")){
      program.style.display = "";
    }
  })
}



window.onload = programMenuOn()
