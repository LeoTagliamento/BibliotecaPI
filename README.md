# 📚 Biblioteca Pessoal - TypeScript CLI

Projeto desenvolvido em TypeScript que simula um **gerenciador de biblioteca pessoal via terminal**, permitindo cadastrar, listar, consultar e remover livros, além de persistência de dados em arquivo JSON.

---

## 🚀 Funcionalidades

O sistema oferece as seguintes opções:

### 📖 Cadastro de livros

* Título
* Autor
* Gênero
* Ano de publicação
* Número de páginas
* Status de leitura (true/false)
* Avaliação (0 a 5 ou `null` se não lido)

---

### 📋 Listagem de livros

Exibe todos os livros cadastrados com suas informações completas.

---

### 🔎 Consulta de livros

Permite buscar livros por:

* Título (busca parcial)
* Autor (busca parcial)
* Gênero (busca parcial)

---

### ❌ Remoção de livros

Remove um livro da biblioteca pelo título.

---

### 💾 Persistência de dados

* Os dados são salvos no arquivo `biblioteca.json`
* Ao iniciar o programa, os livros são carregados automaticamente

---

## 🧠 Estrutura do projeto

```
BibliotecaPI/
├── src/
│   └── index.ts
├── biblioteca.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📦 Modelo de dados

Cada livro segue a seguinte estrutura:

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

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

---

### 2. Compilar o TypeScript

```bash
npx tsc
```

---

### 3. Executar o programa

```bash
node dist/index.js
```

---

### (opcional) Modo desenvolvimento

```bash
npx tsc --watch
```

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
0 - Sair
```

---

## ⚙️ Regras de validação

* Ano deve ser maior que 0
* Número de páginas deve ser maior que 0
* Avaliação:

  * 0 a 5
  * ou `null` se o livro não foi lido

---

## 💡 Tecnologias utilizadas

* Node.js
* TypeScript
* File System (fs)
* Readline (CLI interativo)
* JSON para persistência

---

## 🧱 Conceitos aplicados

* Tipagem com TypeScript
* Controle de fluxo (if, switch)
* Arrays e métodos (filter, findIndex, forEach)
* Funções
* Persistência em arquivos
* Programação orientada a fluxo de menu (CLI)

---

## 📌 Observações

* O sistema utiliza leitura e escrita em arquivo JSON para persistência
* A biblioteca é carregada automaticamente ao iniciar o programa
* Toda interação ocorre via terminal

---

## 👨‍💻 Autor

Projeto desenvolvido por **Tagliamento Leo**
Projeto Integrador - Gerenciador de Biblioteca Pessoal
