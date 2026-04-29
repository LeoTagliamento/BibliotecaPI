import { scanf } from './prompt.js';
import { carregarBiblioteca } from './biblioteca.js';
import { cadastrarLivro } from './acoes/cadastrar.js';
import { listarLivros } from './acoes/listar.js';
import { consultarLivro } from './acoes/consultar.js';
import { removerLivro } from './acoes/remover.js';
import { marcarLivroLido } from './acoes/marcarLido.js';
import { exibirEstatisticas } from './acoes/estatisticas.js';


    console.log("\nTagliameto's Biblioteca");
carregarBiblioteca();
function retornarMenu(): void{
    console.log("===================================================================================================");
    scanf.question(
        "Escolha uma opção: \n 1 - Cadastrar livro \n 2 - Listar todos os livros \n 3 - Consultar livro \n 4 - Remover livro \n 5 - Marcar como lido \n 6 - Estatísticas \n 0 - Sair\n",
        (escolha: string) => {
            switch(escolha){

                case '0':
                    console.log('Finalizando...');
                    scanf.close();
                    break;

                case '1':
                    cadastrarLivro(retornarMenu);
                    break;
                
                case '2':  {
                    listarLivros();
                    retornarMenu();
                    break;
                }
                case '3':
                    consultarLivro(retornarMenu);
                    break;
                case '4':
                    removerLivro(retornarMenu);    
                    break;
                case '5':
                    marcarLivroLido(retornarMenu);
                    break;
                case '6': {
                    exibirEstatisticas();
                    retornarMenu();
                    break;
                }    
                default:
                    console.log("Opção inválida.");
                    retornarMenu();
                    break;
            }
        }
    );
}
retornarMenu();
