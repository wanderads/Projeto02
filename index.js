import chalk from "chalk";
import fs from "fs";

function trataErro (erro){
    throw new Error(chalk.red(erro.code, "Wrong way/Caminho Errado"));
}


async function pegarArquivo(caminhoDoArquivo) {
    const encoding = "utf-8";
    try{
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
    console.log(chalk.blue(texto))
    } catch(erro){
        trataErro(erro);
    }
}

//function pegarArquivo(caminhoDoArquivo) {
 //   const encoding = "utf-8";
 //   fs.promises.readFile(caminhoDoArquivo, encoding)
 //   .then((texto) => console.log(texto))
 //   .catch((erro) => trataErro(erro))
//}


//function pegarArquivo(caminhoDoArquivo){
//    const encoding = "utf-8";
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//        if (erro){
//            trataErro(erro);
//        }
//        console.log(chalk.green(texto))
//    })
//}

//pegarArquivo('./arquivos/sucessada');
pegarArquivo('./arquivos/texto.md');