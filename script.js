
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let botao = document.getElementById("botao");

function entrar(){
    if(email.value.length === 0 || senha.value.length === 0){
        alert("Erro");
    }else{
        botao.innerText = "carregando...";
        botao.style.color = "green";
        botao.style.transition = "all 0.2s ease-out";
        window.location.href = "https://www.flamengo.com.br/";
    }
}
