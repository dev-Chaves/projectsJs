const senhaBox = document.getElementById('senha');
const btnGenerate = document.getElementById('generateBtn');
const btnCopy = document.getElementById('copyBtn');
const length  = 16;
// Usando o DOM para atribuir elementos do HTML NO JAVASCRIPT, botões,
// inputs, texto etc.

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]|\:;"<>,.?/~`';

// Adicionando os itens que podem ser usado, nesse caso, letras maiúsculas,
// minúsculas, números e simbolos.

const allCaracter = upperCase + lowerCase + number + symbols;

// Após defini-los, todas eles foram atribuidos em uma só váriavel.

btnGenerate.onclick = () => {
    let senha = "";
    // Aqui definimos que a variável recebera o valor vazio que posso ser
    // gerado
    senha += upperCase[Math.floor(Math.random() * upperCase.length )];
    senha += lowerCase[Math.floor(Math.random() * lowerCase.length )];
    senha += number[Math.floor(Math.random() * number.length )];
    senha += symbols[Math.floor(Math.random() * symbols.length )];
    // Nos  4 primeiros caracteres, são gerados, um upperCase,lowerCase,
    // número e símbolo, em seguida, é criado um loop de repetição para que a senha seja completada com valores aleatórios.
    while(length > senha.length ){
        senha += allCaracter[Math.floor(Math.random()* allCaracter.length)];
    };
    // Acima, vemos diversos (Math.floor) - é um método usado para que um número seja retornado como um número inteiro;

    senhaBox.value = senha;

};

// Botão de Copiar

btnCopy.addEventListener('click', () =>{
// é adicionado um evento que ao ser clicado, o elemento, "botão", dispara uma função aonde ela confere se está vazio e copia a senha.
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

const teste = Array.from(allCaracter);

console.log(teste);