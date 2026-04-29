import type { Book } from '../tipos.js';
import { biblioteca, salvarBiblioteca } from '../biblioteca.js';
import { scanf } from '../prompt.js';

export function marcarLivroLido(retornarMenu: () => void): void {
    console.log("Lista de livros lidos:");
    biblioteca.forEach((livro: Book, indice: number) => { if(livro.lido === true){
    console.log(`${indice + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
    }});
    console.log("Lista de livros pendentes:");
    biblioteca.forEach((livro: Book, indice: number) => { if(livro.lido === false){
    console.log(`${indice + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
    }});
    scanf.question("Digite o titulo do livro que foi lido:", (livroLido: string) => {
    const livro: Book | undefined = biblioteca.find((livro: Book) => livro.titulo.toLowerCase() === livroLido.toLowerCase());
    if (livro === undefined) {
        console.log("Livro não encontrado.");
    } else { 
        if (livro.lido === true) {
            console.log("Livro já lido.");
        } else {
            livro.lido = true;
            scanf.question("Digite a avaliação do livro (0-5): ", (avaliacaoLido: string) => {
                if (avaliacaoLido < '0' || avaliacaoLido > '5') { 
                    console.log("Avaliação inválida.");
                } else {
                    livro.lido = true;
                    livro.avaliacao = parseInt(avaliacaoLido);
                    salvarBiblioteca();
                    console.log("Livro lido e avaliado com sucesso.");
                }
                retornarMenu();
            });
        }
    }
});
}
