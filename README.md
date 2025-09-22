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

- O backend será executado em `https://localhost:7084` (ou porta configurada no projeto).

---

## Executando o Frontend

1. Abra outro terminal na pasta `frontend/`.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor Angular:

```bash
ng serve
```

- O frontend será executado em `http://localhost:4200`.

---

## Dados de Login

Para acessar o sistema, utilize o usuário de teste:

- **E-mail:** `user@teste.com`  
- **Senha:** `1234`

---

## Endpoints da API

| Método | Endpoint | Descrição |
|--------|---------|-----------|
| GET    | `/api/workshops` | Listar todos os workshops |
| GET    | `/api/workshops/{id}` | Detalhes de um workshop específico |
| POST   | `/api/workshops` | Criar novo workshop |
| GET    | `/api/atas` | Listar todas as atas |
| POST   | `/api/atas` | Criar nova ata |
| GET    | `/api/pets` | Listar todos os pets |
| POST   | `/api/pets` | Criar novo pet |
| POST   | `/api/auth/login` | Login do usuário |

> Certifique-se de que o backend esteja rodando antes de testar os endpoints.

---

## Observações

- As URLs da API estão configuradas em `frontend/src/environments/environment.ts`.  
- Para testar funcionalidades como cadastro de workshops, pets e atas, siga a navegação do sistema no frontend.

---

## Tecnologias utilizadas

- **Frontend:** Angular 17, TypeScript, HTML, SCSS  
- **Backend:** .NET 7, C#, Entity Framework Core  
- **Banco de dados:** SQL Server (ou conforme configuração no backend)
