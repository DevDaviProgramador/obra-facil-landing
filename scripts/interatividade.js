//Acessando o botão 
var botao = document.getElementById("submit-button");

//Acessando o Formulário
var formulario = document.getElementsByName("lead").item(0);

formulario.onsubmit = function() {        
    let resposta = confirm("Tem certeza que está tudo certo?");

    if(resposta) {
        console.log("VAMOOOO");
    } else {
        console.log("No!");
        document.getElementById("message").textContent = "Revisa então aí"
    }

    return resposta;
}

var nameTextField = document.getElementById("name");
nameTextField.onkeydown = function () {
    console.log(nameTextField.value);
    document.getElementById("message").textContent = "Olá " + nameTextField.value
}