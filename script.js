
let email = document.getElementById("email");
let senha = document.getElementById("senha");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");


let letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let especiais = [ "!", "@", "_", "$", "%", "&", "*", ".", "/","#", "?" ];

function validar(){
    if(email.value.length === 0 || senha.value.length === 0){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "Campo de email ou senha vazio!";
    } else if (email.value.length < 10){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "O Email deve ter o minímo 10 caracteres";
    } else if (senha.value.length < 6) {
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "A senha deve ter o minímo de 6 caracteres";
    } else if (!senha.value in letrasMaiusculas || !senha.value in numeros || !senha.value in especiais){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "A senha deve conter um caractere maisculo, especial e um número!";
    }
    else{
        mensagem.style.color = 'green';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "Login valido!";
        botao.innerText = "Carregando...";
        botao.style.color = "green";
    }
}


//botao.style.transition = "all 0.2s ease-out";
//window.location.href = "https://www.flamengo.com.br/";