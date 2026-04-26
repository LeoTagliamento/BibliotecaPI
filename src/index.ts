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
                                scanf.question("Digite o ano de publicação do livro: ", (ano: string) => { 
                                    scanf.question("O livro já foi lido? true/false: ", (lido: string) => {
                                        scanf.question("Digite a avaliação do livro (0-5): ", (avaliacao: string) => {
                                            
                                            const novoLivro: Book = {titulo, autor, genero, ano:parseInt(ano), lido: lido === 'true', avaliacao:parseFloat(avaliacao)};
                                            biblioteca.push(novoLivro);

                                        });
                                    });
                                });
                            });
                        });
                    });
                    break; 

                case '2':  
                console.log("Lista de livros cadastrados:");
                   biblioteca.forEach((livro: Book, indice: number) => {
                    console.log(`${indice + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                });
                break;
            }
        }
    );
