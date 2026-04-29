import type { Book } from '../tipos.js';
import { biblioteca } from '../biblioteca.js';

export function listarLivros(): void {
    console.log("Lista de livros cadastrados:");
    biblioteca.forEach((livro: Book, indice: number) => {
        console.log(`${indice + 1}. ${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
    });
}
