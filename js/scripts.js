const botao = document.getElementById("meu-Botao");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const darkmode = "dark-mode";
const lightmode = "Light Mode";

function changeMode(){
    changeClasses();
    changeTexts();
}

function changeClasses(){
    botao.classList.toggle(darkmode);
    h1.classList.toggle(darkmode);
    body.classList.toggle(darkmode);

}

function changeTexts(){
    
    if(botao.classList.contains(darkmode)){
        botao.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode ON";
        return;
    }

    botao.innerHTML = "Dark mode";
    h1.innerHTML = "Light Mode ON"
}


botao.addEventListener("click", changeMode);




