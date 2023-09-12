const detailMenuList = document.querySelectorAll(".detail_menu");


detailMenuList.forEach((detailMenu)=>{
    detailMenu.addEventListener("click", ()=>{
        window.location.href = `${detailMenu.id}.html`
    })
})