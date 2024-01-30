//manipulação de arquivos :()
const fs = require('fs').promises;
const path = require('path');
//const escreve = require('./escrever.js');
const ler = require('./modulos/ler');

const caminhoArquivo = path.resolve(__dirname,'modulos', 'teste.txt');

// const pessoas = [
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Clara'},
//     {nome: 'Nero'},
// ];
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizarDados(dados)
}

function renderizarDados(dados){
   dados = JSON.parse(dados);
   dados.forEach(val => console.log(val));
}
lerArquivo(caminhoArquivo);

// const dadosArquivos = lerArquivo(caminhoArquivo)
//     .then( dados => console.log(dadosArquivos));