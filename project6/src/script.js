// Botões
const btnAdd = document.getElementById('btnAdd');
const btnTest = document.getElementById('btnTest');
// Inputs
const insertInfo = document.getElementById('insertInfo');
const testInfo = document.getElementById('testInfo');

// Display

const palavraDisplay = document.getElementById('palavraDisplay');
const letrasErradas = document.getElementById('letrasErradas');
const tentativasRestantes = document.getElementById('tentativasRestantes');

// Código 

let palavraSecreta = '';
let palavraEscondida = [];
let letrasIncorretas = [];
let tentativas = 6;

// Adicionando a Palavra secreta .

btnAdd.addEventListener('click', ()=>{
    if(insertInfo.value === ''){
        alert('Digite uma Palavra!!!!');
    }else{
        palavraSecreta = insertInfo.value.toLowerCase().trim();
        palavraEscondida = palavraSecreta.split('').map(()=> {
            return '_'
        });
        
        palavraDisplay.textContent = palavraEscondida.join(' ');

        insertInfo.value = '';
        console.log(palavraSecreta);
        console.log(palavraEscondida);
    }; 
});

btnTest.addEventListener('click', ()=>{

    const letra = testInfo.value.toLowerCase().trim();; 
    
    if(letra === ''){
        alert ('Digite apenas uma Letra!!!!');
        return;
    };

    if(letra.lenght > 1 ){
        alert ('Digite apenas uma Letra!!!!');
        return;
    };

    if( letrasIncorretas.indexOf(letra) !== -1 || palavraEscondida.indexOf(letra) !== -1){
        alert('Você já tentou letra!!!');
        return;
    };

    if(palavraSecreta.indexOf(letra) !== -1 ){
        palavraSecreta.split('').forEach((char, index) =>{
            if (char == letra){
                palavraEscondida[index] = letra;
                console.log(palavraEscondida);
            };
            return;
        });

        palavraDisplay.textContent = palavraEscondida.join(' ');

    }else{
        letrasIncorretas.push(letra);
        letrasErradas.textContent = letrasIncorretas.join(', ');
        tentativas--;
        tentativasRestantes.textContent = tentativas;
    };

    if(tentativas === 0){
        alert('Você Perdeu !!! A Palavra era: ' + palavraSecreta);
        resetGame();
    }else if(palavraEscondida.indexOf('_') === -1){
        alert('Parabéns Você Ganhou !!!');
        resetGame();
    };

    testInfo.value = '';

});

function resetGame() {
    palavraSecreta = '';
    palavraEscondida = [];
    letrasIncorretas = [];
    tentativas = 6;
    palavraDisplay.textContent = '';
    letrasErradas.textContent = '';
    tentativasRestantes.textContent = tentativas;
}