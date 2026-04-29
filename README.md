# 📚 Biblioteca Pessoal - TypeScript CLI

Projeto desenvolvido em **TypeScript** que simula um **gerenciador de biblioteca pessoal via terminal**, permitindo cadastrar, listar, consultar, remover, marcar como lido e gerar estatísticas dos livros, com persistência em arquivo JSON.

---

## 🚀 Funcionalidades

- 📖 **Cadastro de livros** (título, autor, gênero, ano, páginas, status de leitura e avaliação)
- 📋 **Listagem** completa dos livros cadastrados
- 🔎 **Consulta** por título, autor ou gênero (busca parcial)
- ❌ **Remoção** de livros pelo título
- ✅ **Marcar como lido** com avaliação de 0 a 5
- 📊 **Estatísticas** da biblioteca
- 💾 **Banco de informações persistentes** em `biblioteca.json`

---

## 🧱 Estrutura do projeto

```
BibliotecaPI/
├── src/
│   ├── index.ts            # Entrada da aplicação e menu
│   ├── biblioteca.ts       # Carregamento do banco
│   ├── prompt.ts           # Interface de leitura (readline)
│   ├── tipos.ts            # Tipagens (Book)
│   └── acoes/
│       ├── cadastrar.ts
│       ├── listar.ts
│       ├── consultar.ts
│       ├── remover.ts
│       ├── marcarLido.ts
│       └── estatisticas.ts
├── biblioteca.json         # Banco de dados em JSON
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Modelo de dados

```ts
type Book = {
    titulo: string;
    autor: string;
    genero: string;
    ano: number;
    paginas: number;
    lido: boolean;
    avaliacao: number | null;
}
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já incluso no Node.js)

---

## ▶️ Como executar

### 1. Clonar o repositório

```cmd
git clone https://github.com/LeoTagliamento/BibliotecaPI.git
cd BibliotecaPI
```

### 2. Instalar as dependências

```cmd
npm install
```

### 3. Executar o projeto

```cmd
npm start
```

> O script `start` já compila o TypeScript (`tsc`) e executa o arquivo gerado em `dist/index.js`.

---

## 🧪 Scripts disponíveis

| Script          | Descrição                                                  |
| --------------- | ---------------------------------------------------------- |
| `npm start`     | Compila o TypeScript e executa o programa                  |
| `npm run build` | Apenas compila o TypeScript para a pasta `dist/`           |
| `npm run dev`   | Executa o programa em modo watch (`node --watch dist/...`) |

---

## 🖥️ Menu principal

```
Tagliamento's Biblioteca
===================================================================================================
Escolha uma opção:
 1 - Cadastrar livro
 2 - Listar todos os livros
 3 - Consultar livro
 4 - Remover livro
 5 - Marcar como lido
 6 - Estatísticas
 0 - Sair
```

---

## 💡 Tecnologias utilizadas

- Node.js
- TypeScript
- Módulo `fs` (persistência em arquivo)
- Módulo `readline` (CLI interativa)
- JSON para armazenamento

---

## 🧠 Conceitos aplicados

- Tipagem estática com TypeScript
- Modularização em arquivos e pastas
- Controle de fluxo (`if`, `switch`)
- Métodos de arrays (`filter`, `map`, `forEach`, `findIndex`, `reduce`)
- Persistência em arquivo JSON
- Interface CLI baseada em menu

---

## 👨‍💻 Autor

Projeto desenvolvido por **Leonardo Tagliamento**
Gerenciador de Biblioteca Pessoal
