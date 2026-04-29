import type { Book } from '../tipos.js';
import { biblioteca } from '../biblioteca.js';

export function exibirEstatisticas(): void {
    if (biblioteca.length === 0) {
        console.log("Nenhum livro cadastrado.");
        return;
    }
    console.log("===================================================================================================")
    console.log (`Total de livros: ${biblioteca.length} livros(s)`); // Total de livros
    const totalLidos: number =  biblioteca.reduce((contagem: number,atual: Book) => contagem + (atual.lido ? 1 : 0) ,0); // Total de livros
    console.log (`Total lido: ${totalLidos} livro(s)`); //Livro lidos
    const percentualLido: number = (totalLidos * 100) / biblioteca.length; // Percentual lidos
    console.log(`Percentual de livros lidos: ${percentualLido.toFixed(2)}%`);// Percentual lidos
    const listaAvaliacao: Book[] = biblioteca.filter((livro: Book) => livro.avaliacao !== null);  // Media Avaliações
    const mediaAvaliacao: number = (listaAvaliacao.reduce((contagem: number,livro: Book) => contagem + livro.avaliacao!,0))/listaAvaliacao.length;  // Media Avaliações
    console.log(`Media das avaliações: ${mediaAvaliacao.toFixed(1)}/5`) // Media Avaliações
    if (listaAvaliacao.length > 0){
    const maiorAvaliacao: Book  = listaAvaliacao.reduce((maior: Book, atual: Book) => atual.avaliacao! > maior.avaliacao! ? atual : maior);
    console.log(`Maior avaliação: ${maiorAvaliacao.avaliacao!.toFixed(1)} do livro ${maiorAvaliacao.titulo}`);}
    const totalPaginasLidas: number = listaAvaliacao.reduce((total: number, atual: Book) => total + atual.paginas!,0);
    console.log(`Total de páginas lidas: ${totalPaginasLidas}`);
    console.log("===================================================================================================");
    const grupos: { [decada: number]: Book[] } = {};
    biblioteca.forEach((livro: Book) => {
        const decada: number = Math.floor(livro.ano / 10) * 10;
        if (!grupos[decada]) grupos[decada] = [];
        grupos[decada].push(livro);
    });
    console.log("Livros por década:");
    Object.keys(grupos).map(Number).sort((a: number, b: number) => a - b).forEach((decada: number) => {
            const livrosPorDecada: Book[] = grupos[decada]!;
            console.log(`${decada}s (${livrosPorDecada.length} livro(s)):`);
            livrosPorDecada.forEach((livro: Book) => {
                console.log(`- ${livro.titulo} (${livro.ano})`);
            });
        });
    console.log("===================================================================================================");
    const ranking: Book[] = [...listaAvaliacao].sort((a: Book, b: Book) => b.avaliacao! - a.avaliacao!);
    if (ranking.length > 0) {
        console.log("Ranking de avaliação:");
        ranking.forEach((livro: Book, indice: number) => {
            console.log(`${indice + 1}º - ${livro.titulo} (${livro.autor}) - ${livro.avaliacao!.toFixed(1)}/5`);
        });
    }
}
