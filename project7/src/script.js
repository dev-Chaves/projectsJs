import { consultaApi } from './funcionarios/funcionarios.js';

// DOM
const btnIncluir = document.getElementById('btnIncluir');
const modalProdutos = document.getElementById('modalProdutos');
const btnFecharModal = document.getElementById('btnFecharModal');
// MODAL

consultaApi();

btnIncluir.addEventListener('click', ()=>{
    modalProdutos.show();
});

btnFecharModal.addEventListener('click', ()=>{
    modalProdutos.closest();
});