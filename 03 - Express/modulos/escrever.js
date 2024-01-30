//manipulação de arquivos :()
const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, {flag:'w'}); // a flag w é pra apagar tudo que tiver escrito e reescrever, a: é de append daí essa flag faz concomitar as informaçõs, tipo adiciona
};