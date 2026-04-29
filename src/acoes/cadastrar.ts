import type { Book } from '../tipos.js';
import { biblioteca, salvarBiblioteca } from '../biblioteca.js';
import { scanf } from '../prompt.js';

export function cadastrarLivro(retornarMenu: () => void): void {
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
}
