var btn = document.getElementById("proximo");
var slider = document.querySelector(".slider");
var cadastro2 = document.querySelector("#cadastro2")
var cadastro1 = document.getElementById("cadastro")
var espacamento = document.querySelector(".espacamento")
// btn.addEventListener("click", ()=>{

// })
function Proximo() {
    slider.classList.add("active")
    // window.alert("hora de ativar")
    cadastro2.classList.add("active")
    cadastro1.classList.add("remove")
    espacamento.classList.add("remove")
}
function HomePage() {
    window.location.href = "HomePage.html";
}
function GotoLoginPage() {
    window.location.href = "Login.html";
}
function irParaConsultaPage() {
    window.location.href = "AgendarConsultaPage.html"
}
function RealizarAgendamento() {
    window.location.href = "ConfirmPage.html"
}
function ConfimarConsulta() {
    window.location.href = "HomePage.html"
}

function GoToEditUserPage() {
    window.location.href = "EditUserPage.html"
}

var EditFoto = document.querySelector(".foto-perfil")
var pincel = document.querySelector(".img-perfil i")
var oacityPerfil = document.querySelector(".foto-perfil img")
var ItemNav = document.querySelector(".item-nav")
var lineAnimate = document.querySelector(".line-preset")
var Calendario = document.querySelector(".calendario")
var toggeTheme = document.querySelector(".togge-theme")
var solIcon = document.querySelector(".fa-sun")
var btnTogge = document.querySelector(".btn-togge")
var LuaIcon = document.querySelector(".fa-moon") 
toggeTheme.addEventListener("click" , ()=>{
    solIcon.classList.toggle("active")
    btnTogge.classList.toggle("active")
    LuaIcon.classList.toggle("active")

    if (document.body.getAttribute("data-theme") === "dark") {
        document.body.removeAttribute("data-theme")
    } else {
        document.body.setAttribute("data-theme" , "dark")
    }
})












EditFoto.addEventListener("mousemove", () => {
    pincel.classList.add("active")
    // window.alert("Foi?")
})
EditFoto.addEventListener("mouseout", () => {
    pincel.classList.remove("active")
})
