const menuHamburger = document.querySelector(".hamburguer")

menuHamburger.addEventListener('click',()=>{
    document.getElementById("opciones").style.display = "flex";
    document.getElementById("navbar").style.height = "15%";
})
