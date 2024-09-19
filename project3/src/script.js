const senhaBox = document.getElementById('senha');
const btnGenerate = document.getElementById('generateBtn');
const btnCopy = document.getElementById('copyBtn');
const length  = 16;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]|\:;"<>,.?/~`';

const allCaracter = upperCase + lowerCase + number + symbols;

btnGenerate.onclick = () => {
    let senha = "";
    senha += upperCase[Math.floor(Math.random() * upperCase.length )];
    senha += lowerCase[Math.floor(Math.random() * lowerCase.length )];
    senha += number[Math.floor(Math.random() * number.length )];
    senha += symbols[Math.floor(Math.random() * symbols.length )];

    while(length > senha.length ){
        senha += allCaracter[Math.floor(Math.random()* allCaracter.length)];
    };

    senhaBox.value = senha;

};

btnCopy.addEventListener('click', () =>{

    if(senhaBox.value === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gere um senha!!!",
        });
    } else{

    senhaBox.select();
    const copiar = document.execCommand('copy');
    if(copiar){
        Swal.fire({
            title: "Good job!",
            text: "Sua Senha foi Copiada!!!",
            icon: "success"
          });
        };
    };
});

