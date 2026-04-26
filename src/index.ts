import * as fs from 'fs';
import * as readline from 'readline';

type Book = {
    titulo: string,
    autor: string,
    genero: string,
    ano: number,
    lido: boolean,
    avaliacao: number
}
const scanf = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})
escolha 
while(escolha !== 0){
console.log("Tagliameto's Biblioteca")
console.log("Escolha uma opção: \n 1 - Cadastrar livro \n 2 - Listar todos os livros \n 3 - Consultar livro \n 0 - Sair"); 
if escolha === 1 {

}