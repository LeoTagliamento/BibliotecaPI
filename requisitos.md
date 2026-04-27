# Projeto Integrador - Gerenciador de Biblioteca Pessoal

## Visão Geral

Este projeto consolida todos os conceitos estudados até a Aula 06. Você vai construir, em TypeScript, um **Gerenciador de Biblioteca Pessoal** — uma aplicação de console que permite cadastrar livros, marcar leituras, buscar por autor ou título e gerar estatísticas da coleção.

Ao final, você terá um repositório no GitHub com histórico de commits por etapa, demonstrando domínio dos conceitos fundamentais: Git, Node.js, TypeScript, variáveis tipadas, operadores, controle de fluxo, funções e arrays.

---

## Objetivos de Aprendizagem

O projeto exercita, de forma articulada, os conceitos das 6 primeiras aulas:

| Aula | Conceito          | Onde aparece no projeto                             |
| ---- | ----------------- | --------------------------------------------------- |
| 01   | Git e GitHub      | Commits por etapa, push para repositório remoto     |
| 02   | Node.js e npm     | `package.json`, scripts, execução via terminal      |
| 03   | TypeScript        | Tipagem explícita, `const`/`let`, `tsconfig.json`   |
| 04   | Controle de fluxo | `if/else`, `switch`, loops para classificar livros  |
| 05   | Funções           | Decomposição da lógica em funções tipadas           |
| 06   | Arrays            | Arrays paralelos, `map`/`filter`/`reduce`/`forEach` |

---

## Requisitos Técnicos

- Node.js 18+ (com suporte a `--watch`)
- TypeScript 5+
- VS Code (recomendado)
- Repositório Git inicializado, com push para o GitHub

---

## Estrutura Esperada

```
biblioteca-pessoal/
├── src/
│   └── index.ts         # Todo o código do projeto
├── dist/                # Gerado pelo tsc (no .gitignore)
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md            # Descrição do seu projeto
```

---

## Modelo de Dados

Como falamos pouco sobre objetos/interfaces, usaremos **arrays paralelos**: cada array representa uma "coluna", e o índice identifica o livro.

```typescript
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = []; // 0 se nao lido, 1 a 5 se lido
```

> Todos os arrays devem permanecer **sincronizados por índice**: se `titulos[0]` é "O Hobbit", então `autores[0]` deve ser "Tolkien", `anos[0]` deve ser `1937`, e assim por diante. Manter essa sincronia é responsabilidade das suas funções.

Dados iniciais sugeridos (pode alterar):

```typescript
titulos.push(
  'O Hobbit',
  'Clean Code',
  '1984',
  'Dom Casmurro',
  'O Nome do Vento',
);
autores.push(
  'J.R.R. Tolkien',
  'Robert C. Martin',
  'George Orwell',
  'Machado de Assis',
  'Patrick Rothfuss',
);
anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);
```

---

## Funcionalidades Requeridas

Implemente as funções abaixo com **tipagem explícita** de parâmetros e retorno.

### Cadastro e remoção

```typescript
adicionarLivro(titulo: string, autor: string, ano: number, paginas: number): void
removerLivro(indice: number): void
```

### Consulta e exibição

```typescript
exibirBiblioteca(): void                            // usar forEach
buscarPorTitulo(termo: string): number[]            // indices dos livros que contem o termo
listarPorAutor(autor: string): string[]             // titulos do autor, usar filter + map
```

### Status de leitura

```typescript
marcarComoLido(indice: number, avaliacao: number): void   // validar avaliacao entre 1 e 5
listarLidos(): string[]
listarPendentes(): string[]
```

### Estatísticas

```typescript
totalLivros(): number
totalLidos(): number
percentualLidos(): number                           // ex: 60.00
mediaAvaliacoes(): number                           // media apenas dos lidos - filter + reduce
livroMaiorAvaliacao(): string                       // usar reduce
totalPaginasLidas(): number                         // somar paginas dos lidos - filter + reduce
```

### Classificação

```typescript
exibirPorDecada(): void                             // agrupar e exibir por decada (1930s, 1940s, ...)
```

---

## Etapas de Desenvolvimento

Cada etapa corresponde a **pelo menos um commit**. Mantenha um histórico coerente e descritivo.

### Etapa 1 — Setup do projeto

- Criar pasta do projeto e executar `npm init -y`
- Instalar `typescript` e `@types/node` como `devDependencies`
- Configurar `tsconfig.json` com `rootDir: "./src"` e `outDir: "./dist"` e `strict: true`
- Criar `.gitignore` (`node_modules/`, `dist/`)
- `git init` e primeiro commit

**Commit sugerido:** `"Configura projeto TypeScript e inicializa repositorio"`

### Etapa 2 — Dados e exibição

- Declarar os arrays paralelos em `src/index.ts`
- Popular com os dados iniciais
- Implementar `exibirBiblioteca()` usando `forEach`
- Executar com `npm run dev` e validar a saída formatada

**Commit sugerido:** `"Adiciona estrutura de dados e exibicao da biblioteca"`

### Etapa 3 — Cadastro e remoção

- Implementar `adicionarLivro` e `removerLivro`
- Validar entradas (`ano > 0`, `paginas > 0`) com `if`
- No final do arquivo, testar: adicionar 2 livros, remover 1, exibir novamente

**Commit sugerido:** `"Implementa cadastro e remocao de livros"`

### Etapa 4 — Busca e filtros

- Implementar `buscarPorTitulo` (usar `includes` em string)
- Implementar `listarPorAutor` usando `filter` + `map`

**Commit sugerido:** `"Adiciona funcoes de busca por titulo e autor"`

### Etapa 5 — Marcar como lido

- Implementar `marcarComoLido` (validar avaliação 1–5 com `if` ou `switch`)
- Implementar `listarLidos` e `listarPendentes`

**Commit sugerido:** `"Implementa controle de status de leitura"`

### Etapa 6 — Estatísticas

- Implementar todas as funções da seção Estatísticas
- Exercitar explicitamente `filter`, `map` e `reduce`
- Formatar saídas com `toFixed(2)` quando fizer sentido

**Commit sugerido:** `"Adiciona funcoes estatisticas com metodos de array"`

### Etapa 7 — Classificação por década

- Implementar `exibirPorDecada`
- Calcular a década com `Math.floor(ano / 10) * 10`
- Usar loops aninhados ou `filter` para agrupar

**Commit sugerido:** `"Implementa classificacao de livros por decada"`

### Etapa 8 — Demonstração final

- Montar, ao final do `index.ts`, uma demo que exercite **todas** as funções em sequência
- Caprichar na formatação da saída (cabeçalhos, separadores, template literals)
- Push final para o GitHub

**Commit sugerido:** `"Finaliza demonstracao completa no index.ts"`

---

## Exemplo de Saída Esperada

Ao executar `npm run dev`, a saída deve ser algo como:

```
=== MINHA BIBLIOTECA ===
1. "O Hobbit" (1937) - J.R.R. Tolkien - 310 pag - LIDO (5/5)
2. "Clean Code" (2008) - Robert C. Martin - 464 pag - LIDO (4/5)
3. "1984" (1949) - George Orwell - 328 pag - PENDENTE
4. "Dom Casmurro" (1899) - Machado de Assis - 256 pag - LIDO (5/5)
5. "O Nome do Vento" (2007) - Patrick Rothfuss - 662 pag - PENDENTE

=== ESTATISTICAS ===
Total de livros: 5
Livros lidos: 3 (60.00%)
Media das avaliacoes: 4.67
Livro melhor avaliado: O Hobbit
Total de paginas lidas: 1030

=== POR DECADA ===
1890s: Dom Casmurro
1930s: O Hobbit
1940s: 1984
2000s: Clean Code, O Nome do Vento
```

---

## Critérios de Avaliação

| Critério                                                       | Peso |
| -------------------------------------------------------------- | ---- |
| Configuração do projeto e repositório Git                      | 15%  |
| Tipagem correta (TypeScript `strict`)                          | 15%  |
| Uso apropriado de controle de fluxo                            | 15%  |
| Decomposição em funções reutilizáveis                          | 20%  |
| Uso de métodos de array (`map`, `filter`, `reduce`, `forEach`) | 20%  |
| Histórico Git coerente (commits por etapa)                     | 10%  |
| Legibilidade e organização do código                           | 5%   |

---

## Entrega

1. Publicar o repositório no GitHub (público ou compartilhado com o professor)
2. Enviar o link pelo canal combinado
3. O repositório deve conter:
   - Código-fonte em `src/`
   - `package.json` funcional (executar com `npm run dev`)
   - `README.md` do projeto com: nome do aluno, descrição, instruções de execução
   - Histórico Git com pelo menos 6 commits representativos

---

## Desafios Bônus (opcionais)

Para quem quiser explorar além:

1. **Menu interativo**: usar `readline` (Aula 02) para navegar entre as operações
2. **Modularização**: dividir o código em múltiplos arquivos com `export`/`import`
3. **Ordenação múltipla**: listar por ano, por avaliação ou por páginas usando `sort`
4. **Gêneros literários**: adicionar `generos: string[][]` (array de arrays) e função para filtrar por gênero
5. **Ranking**: `exibirRanking()` listando os lidos em ordem decrescente de avaliação

---

## Dica: Uso da IA durante o desenvolvimento

O projeto foi desenhado para você exercitar os conceitos **você mesmo**. Use o GitHub Copilot Chat para:

- Tirar dúvidas sobre conceitos específicos (_"Como funciona o segundo parâmetro do `reduce`?"_)
- Revisar sua implementação depois de pronta (_"Essa função poderia ficar mais legível?"_)
- Entender mensagens de erro do TypeScript

**Evite** pedir ao Copilot a implementação pronta de uma função inteira — você perderá a oportunidade de praticar. A regra é simples: primeiro tente, depois pesquise na documentação, só então peça ajuda à IA.

---

## Leitura Complementar

- [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [MDN — Array methods](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods)
- [Pro Git (livro gratuito, em português)](https://git-scm.com/book/pt-br/v2)
