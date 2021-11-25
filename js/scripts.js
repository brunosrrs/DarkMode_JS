const botao = document.getElementById("meu-Botao");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const darkmode = "dark-mode";

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
    const Dark = "Dark Mode";
    const Light = "Light Mode";
    
    if(botao.classList.contains(darkmode)){
        botao.innerHTML = Light;
        h1.innerHTML = Dark + "ON";
        return;
    }

    botao.innerHTML = Dark;
    h1.innerHTML = Light + "ON";
}


botao.addEventListener("click", changeMode);




