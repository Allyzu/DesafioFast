# DesafioFast

Sistema fullstack de gerenciamento de workshops, desenvolvido como projeto de avaliação para vaga júnior.  
Backend em .NET 7 e frontend em Angular, com funcionalidades de cadastro de workshops, pets, consultas e atas, integrando interface amigável com persistência de dados.

---

## Estrutura do projeto

```
D3safioFast/
│
├─ backend/        <-- Projeto .NET 7
├─ frontend/       <-- Projeto Angular
└─ README.md       <-- Este arquivo
```

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)

---

## Executando o Backend

1. Abra o terminal na pasta `backend/`.
2. Restaure as dependências e compile o projeto:

```bash
dotnet restore
dotnet build
```

3. Execute o backend:

```bash
dotnet run
```

- O backend vai rodar em `https://localhost:7084` (ou porta configurada no projeto).

---

## Executando o Frontend

1. Abra outro terminal na pasta `frontend/`.
2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor Angular:

```bash
ng serve
```

- O frontend vai rodar em `http://localhost:4200`.

---

## Dados de Login

Para acessar o sistema, utilize o usuário de teste:

- **E-mail:** `user@teste.com`  
- **Senha:** `1234`

---

## Observações

- Certifique-se de que o backend esteja rodando antes de iniciar o frontend.  
- As URLs da API estão configuradas em `frontend/src/environments/environment.ts`.  
- Para testar funcionalidades como cadastro de workshops, pets e atas, siga a navegação do sistema no frontend.

---

## Tecnologias utilizadas

- **Frontend:** Angular 17, TypeScript, HTML, SCSS  
- **Backend:** .NET 7, C#, Entity Framework Core  
- **Banco de dados:** (configuração conforme o projeto, ex.: SQL Server ou SQLite)

