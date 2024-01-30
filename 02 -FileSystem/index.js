//inicia importando o fs e o path, e também dizendo que o fs vai ser utilizando em conjunto com promises para auxiliar a manipular as operações assíncronas
const fs = require('fs').promises;
const path = require('path');

//aqui ele cria uma 
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir); //
    walk(files, rootDir);
}

async function walk(files, rootDir){ 
    for(let file of files){
        const fileFullPath = path.resolve(rootDir,file);
        const stat = await fs.stat(fileFullPath);
        console.log(fileFullPath, stat.isDirectory());
        if (/node_module/g.test(fileFullPath)) continue;
       

        if(stat.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if (!/\.css$/g.test(fileFullPath)) continue;
        console.log(fileFullPath);
    }
}
readdir('/Users/vitor/OneDrive/Documentos/INGRID/UDEMY/JS');