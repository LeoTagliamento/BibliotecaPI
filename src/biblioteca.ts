import * as fs from 'fs';
import type { Book } from './tipos.js';

export const biblioteca: Book[] = [];

export function carregarBiblioteca(): void {
    const todosLivros: string = fs.readFileSync('biblioteca.json', 'utf8');
    biblioteca.push(...JSON.parse(todosLivros) as Book[]);
}

export function salvarBiblioteca(): void {
    const bibliotecajson: string = JSON.stringify(biblioteca, null, 2);
    fs.writeFileSync('biblioteca.json', bibliotecajson, 'utf8');
}
