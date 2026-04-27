import * as fs from 'fs';
import * as readline from 'readline';

type Book = {
    titulo: string,
    autor: string,
    genero: string,
    ano: number,
    paginas: number,
    lido: boolean,
    avaliacao: number | null
}

const biblioteca: Book[] = [];
function carregarBiblioteca(): void {
        const todosLivros = fs.readFileSync('biblioteca.json', 'utf8');
            biblioteca.push(...JSON.parse(todosLivros) as Book[]);
    
}
function salvarBiblioteca(): void {
    const bibliotecajson = JSON.stringify(biblioteca, null, 2);
    fs.writeFileSync('biblioteca.json', bibliotecajson, 'utf8');
}

const scanf = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});


    console.log("\nTagliameto's Biblioteca");
carregarBiblioteca();
function retornarMenu(){
    console.log("===================================================================================================");
    scanf.question(
        "Escolha uma opção: \n 1 - Cadastrar livro \n 2 - Listar todos os livros \n 3 - Consultar livro \n 4 - Remover livro \n 5 - Marcar como lido \n 0 - Sair\n",
        (escolha) => {
            switch(escolha){

                case '0':
                    console.log('Finalizando...');
                    scanf.close();
                    break;

                case '1':
                    scanf.question("Digite o título do livro: ", (titulo: string) => {
                        scanf.question("Digite o autor do livro: ", (autor: string) => {
                            scanf.question("Digite o gênero do livro: ", (genero: string) => {
                                scanf.question("Digite o ano de publicação do livro: ", (ano: string) => { 
                                    scanf.question("Digite o número de páginas do livro: ", (paginas: string) => {
                                        scanf.question("O livro já foi lido? true/false: ", (lido: string) => {
                                            scanf.question("Digite a avaliação do livro (0-5) ou se não foi lido deixe em branco: ", (avaliacao: string) => {
                                            if (parseInt(ano) <= 0) {
                                                console.log("Ano de publicação inválido.");
                                                retornarMenu();
                                                return;
                                            }
                                            if (parseInt(paginas) <= 0) {
                                                console.log("Número de páginas inválido.");
                                                retornarMenu();
                                                return; 
                                            }
                                            const novoLivro: Book = {titulo, autor, genero, ano:parseInt(ano), paginas:parseInt(paginas), lido: lido === 'true', avaliacao: avaliacao === '' ? null : parseFloat(avaliacao)};
                                            biblioteca.push(novoLivro);
                                            salvarBiblioteca();
                                            console.log('Livro cadastrado com sucesso.');
                                            retornarMenu();

                                        });
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
                    retornarMenu();
                    break;

                case '3':
                    scanf.question("Tipo de consulta:\n 1 - Titulo \n 2 - Autor \n 3 - Gênero\n", (tipoConsulta: string) => {
                        switch(tipoConsulta){
                            case '1':
                                scanf.question("Digite o título do livro que deseja consultar: ", (tituloConsulta: string) => {
                                    const resultados = biblioteca.filter((livro: Book) => livro.titulo.toLowerCase().includes(tituloConsulta.toLowerCase()));
                                    if (resultados.length === 0) {
                                        console.log("Nenhum livro encontrado com esse título.");
                                    } else {
                                        resultados.forEach((livro) => {
                                            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                                        });
                                    }
                                    retornarMenu();
                                });
                                break;
                            case '2':
                                scanf.question("Digite o autor do livro: ", (autorConsulta: string) => {
                                    const resultados = biblioteca.filter((livro: Book) => livro.autor.toLowerCase().includes(autorConsulta.toLowerCase()));
                                    if (resultados.length === 0) {
                                        console.log("Nenhum livro encontrado desse autor.");
                                    } else {
                                        resultados.forEach((livro) => {
                                            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                                        });
                                    }
                                    retornarMenu();
                                });
                                break;
                            case '3':
                                scanf.question("Digite o gênero do livro: ", (generoConsulta: string) => {
                                    const resultados = biblioteca.filter((livro: Book) => livro.genero.toLowerCase().includes(generoConsulta.toLowerCase()));
                                    if (resultados.length === 0) {
                                        console.log("Nenhum livro encontrado desse gênero.");
                                    } else {
                                        resultados.forEach((livro) => {
                                            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                                        });
                                    }
                                    retornarMenu();
                                });
                                break;
                            default:
                                console.log("Tipo de consulta inválido.");
                                retornarMenu();
                                break;
                        }
                    });
                    break;
                case '4':
                    scanf.question("Digite o titulo do livro para remover: ", (tituloRemover: string) => {
                        const posicao = biblioteca.findIndex((livro: Book) => livro.titulo.toLowerCase() === tituloRemover.toLowerCase());
                        if (posicao === -1) {
                            console.log("Livro não encontrado.");
                        } else {
                            biblioteca.splice(posicao, 1);
                            salvarBiblioteca();
                            console.log("Livro removido com sucesso.");
                        }   
                        retornarMenu();
                    });
                    break;
                case '5':
                    scanf.question("Digite o titulo do livro que foi lido:", (livroLido: string) => {
                    const posicao = biblioteca.findIndex((livro: Book) => livro.titulo.toLowerCase() === livroLido.toLowerCase());
                    if (posicao === -1) {
                        console.log("Livro não encontrado.");
                    } else { 
                        if (biblioteca(lido) === true {
                            console.log("Livro já lido.");
                        } else {
                        
                default:
                    console.log("Opção inválida.");
                    retornarMenu();
                    break;
            }
        }
    );
}
retornarMenu();
