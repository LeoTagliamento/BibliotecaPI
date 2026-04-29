import type { Book } from '../tipos.js';
import { biblioteca } from '../biblioteca.js';
import { scanf } from '../prompt.js';

export function consultarLivro(retornarMenu: () => void): void {
    scanf.question("Tipo de consulta:\n 1 - Titulo \n 2 - Autor \n 3 - Gênero\n", (tipoConsulta: string) => {
        switch(tipoConsulta){
            case '1':
                scanf.question("Digite o título do livro que deseja consultar: ", (tituloConsulta: string) => {
                    const resultados: Book[] = biblioteca.filter((livro: Book) => livro.titulo.toLowerCase().includes(tituloConsulta.toLowerCase()));
                    if (resultados.length === 0) {
                        console.log("Nenhum livro encontrado com esse título.");
                    } else {
                        resultados.forEach((livro:Book) => {
                            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                        });
                    }
                    retornarMenu();
                });
                break;
            case '2':
                scanf.question("Digite o autor do livro: ", (autorConsulta: string) => {
                    const resultados: Book[] = biblioteca.filter((livro: Book) => livro.autor.toLowerCase().includes(autorConsulta.toLowerCase()));
                    if (resultados.length === 0) {
                        console.log("Nenhum livro encontrado desse autor.");
                    } else {
                        resultados.forEach((livro: Book) => {
                            console.log(`${livro.titulo} - ${livro.autor} (${livro.ano}) - Gênero: ${livro.genero} - Lido: ${livro.lido} - Avaliação: ${livro.avaliacao}/5`);
                        });
                    }
                    retornarMenu();
                });
                break;
            case '3':
                scanf.question("Digite o gênero do livro: ", (generoConsulta: string) => {
                    const resultados: Book[] = biblioteca.filter((livro: Book) => livro.genero.toLowerCase().includes(generoConsulta.toLowerCase()));
                    if (resultados.length === 0) {
                        console.log("Nenhum livro encontrado desse gênero.");
                    } else {
                        resultados.forEach((livro: Book) => {
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
}
