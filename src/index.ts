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

const biblioteca: Book[] = [];

const scanf = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

let escolha = 1;

while(escolha !== 0){
    console.log("Tagliameto's Biblioteca");

    scanf.question(
        "Escolha uma opção: \n 1 - Cadastrar livro \n 2 - Listar todos os livros \n 3 - Consultar livro \n 0 - Sair\n",
        (escolha) => {
    
            switch(escolha){

                case '0': break;

                case '1':
                    scanf.question("Digite o título do livro: ", (titulo: string) => {
                        scanf.question("Digite o autor do livro: ", (autor: string) => {
                            scanf.question("Digite o gênero do livro: ", (genero: string) => {
                                scanf.question("Digite o ano de publicação do livro: ", (ano: number) => { 
                                    scanf.question("O livro já foi lido? true/false: ", (lido: boolean) => {
                                        scanf.question("Digite a avaliação do livro (0-5): ", (avaliacao: number) => {
                                            
                                            const novoLivro: Book = {titulo, autor, genero, ano, lido, avaliacao};
                                            biblioteca.push(novoLivro);

                                        });
                                    });
                                });
                            });
                        });
                    });
                    break;   
            }
        }
    );
}