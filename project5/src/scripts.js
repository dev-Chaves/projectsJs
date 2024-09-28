const inputBox = document.getElementById('inputBox');
const btnGenerate = document.getElementById('btnGenerate');
const qrImg = document.getElementById('qrImg');

//  API

let url = inputBox.ariaValueMax;


btnGenerate.addEventListener('click', ()=>{

    if(inputBox.value === "" ){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Digite sua URL!!!",
        });
    } else{
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ inputBox.value; 
    };

});