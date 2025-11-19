let email = document.getElementById("email");
let senha = document.getElementById("senha");
let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");


function validar(){
    let letrasMaiusculas = /[A-Z]/.test(senha.value);
    let numeros = /[0-9]/.test(senha.value);
    let especiais = /[!@$%&*\.\/#?]/.test(senha.value);
    let regexEmail = /\S+@\S+\.\S+/.test(email.value);


    if(email.value.length === 0 || senha.value.length === 0){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e08e';
        mensagem.innerHTML = "Campo de email ou senha vazio!";
    } else if (email.value.length < 10){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e08e';
        mensagem.innerHTML = "O Email deve ter o minímo 10 caracteres";
    } else if (!regexEmail){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e08e';
        mensagem.innerHTML = "O Email deve conter '@' e '.'";
    } else if (senha.value.length < 6) {
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e08e';
        mensagem.innerHTML = "A senha deve ter o minímo de 6 caracteres";
    } else if (!letrasMaiusculas || !numeros || !especiais){
        mensagem.style.color = 'red';
        mensagem.style.backgroundColor = '#eee0e08e';
        mensagem.innerHTML = "A senha deve conter um caractere maiúsculo, especial e um número!";
    }
    else{
        mensagem.style.color = 'green';
        mensagem.style.backgroundColor = '#eee0e0ff';
        mensagem.innerHTML = "Login valido!";
        botao.style.fontSize = '15px';
        botao.innerText= "Carregando...";
        // botao.style.color = "green";
        window.location.href = "https://github.com/FrancinaldoAlves/Formulario-Login";
    }
}

botao.addEventListener("click", (evento) => {
    evento.preventDefault();
   
   validar();
   
   setTimeout(() => {
       mensagem.innerHTML = "";
       mensagem.style.color = null;
       mensagem.style.backgroundColor = null
   }, 2000);
});
