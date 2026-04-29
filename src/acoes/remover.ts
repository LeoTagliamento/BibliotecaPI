import type { Book } from '../tipos.js';
import { biblioteca, salvarBiblioteca } from '../biblioteca.js';
import { scanf } from '../prompt.js';

export function removerLivro(retornarMenu: () => void): void {
    scanf.question("Digite o titulo do livro para remover: ", (tituloRemover: string) => {
        const posicao: number = biblioteca.findIndex((livro: Book) => livro.titulo.toLowerCase() === tituloRemover.toLowerCase());
        if (posicao === -1) {
            console.log("Livro não encontrado.");
        } else {
            biblioteca.splice(posicao, 1);
            salvarBiblioteca();
            console.log("Livro removido com sucesso.");
        }   
        retornarMenu();
    });
}
