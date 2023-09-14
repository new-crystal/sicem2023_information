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

// slideUp 함수 정의
function slideUp(element) {
  element.style.transition = 'height 0.3s ease';
  element.style.overflow = 'hidden';
  element.style.height = '0';
}

// slideDown 함수 정의
function slideDown(element, originalHeight) {
  element.style.transition = 'height 0.3s ease';
  element.style.overflow = 'hidden';
  element.style.height = originalHeight;
}

// triggerList를 클릭할 때 slideUp 또는 slideDown 적용
triggerList.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    const toggleCon = e.target.parentNode.nextElementSibling;
    const originalHeight = toggleCon.scrollHeight + 'px';
    
    if (toggleCon.style.height === '0px' || toggleCon.style.height === '') {
      slideDown(toggleCon, originalHeight);
    } else {
      slideUp(toggleCon);
    }
  });
});

function hideToggle(){
    toggleConList.forEach((toggleCon)=>{
        toggleCon.style.height = '0';
    })
}


function showScientificProgram(){
  programList.forEach((program)=>{
    const progoramTab =  new URLSearchParams(window.location.search).get("tab_num");
    program.style.display = "none";

    if(window.location.search === "" && program.classList.value.includes("plenary"))  {     
      program.style.display = "";
    }
    else if(progoramTab === '1' && program.classList.value.includes("plenary")){
      program.style.display = "";
    }
    else if(progoramTab === '2' && program.classList.value.includes("award")){
      program.style.display = "";
    }
    else if(progoramTab === '3' && program.classList.value.includes("joint")){
      program.style.display = "";
    }
    else if(progoramTab === '4' && program.classList.value.includes("special1")){
      program.style.display = "";
    }   
    else if(progoramTab === '5' && program.classList.value.includes("special2")){
      program.style.display = "";
    }
    else if(progoramTab === '6' && program.classList.value.includes("breakfast")){
      program.style.display = "";
    }
    else if(progoramTab === '7' && program.classList.value.includes("thyroid")){
      program.style.display = "";
    }
    else if(progoramTab === '9' && program.classList.value.includes("clinical")){
      program.style.display = "";
    }
    else if(progoramTab === '10' && program.classList.value.includes("basic")){
      program.style.display = "";
    }
    else if(progoramTab === '8' && program.classList.value.includes("bone")){
      program.style.display = "";
    }
    else if(progoramTab === '11' && program.classList.value.includes("pituitary")){
      program.style.display = "";
    }
    else if(progoramTab === '12' && program.classList.value.includes("satellite")){
      program.style.display = "";
    }
    else if(progoramTab === '13' && program.classList.value.includes("ultrasound")){
      program.style.display = "";
    }
  })
}



window.onload = programMenuOn()


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