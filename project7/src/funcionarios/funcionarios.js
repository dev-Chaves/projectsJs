import funcionarios from '../../../databases/banco.js'

const tbProdutos = document.getElementById('tbProdutos');

export async function consultaApi() {
        const response = await funcionarios;
        console.log('Consultando...');
        console.log(response.banco);
}
let rows = '';
export function atualizaTabela(dados){

    tbProdutos.innerHTML = `
    <tr id="cabecalho">
            <th id="btnId"> ID </th>
            <th id="btnName"> Nome </th>
            <th id="btnDep"> Departamento </th>
            <th id="btnFuncao"> Função </th>
            <th id="btnSalario"> Salário </th>
        </tr>`

    dados.forEach(funcionarios =>{
        
    });

};  