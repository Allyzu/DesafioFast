# 🚀 DesafioFast

Sistema **fullstack** de gerenciamento de workshops, desenvolvido como projeto de avaliação para vaga júnior.  
Backend em **.NET 7** e frontend em **Angular**, com funcionalidades de cadastro de workshops, pets, consultas e atas, integrando interface amigável com persistência de dados.

---

## 🗂 Estrutura do projeto

DesafioFast/
│
├─ backend/ <-- Projeto .NET 7
│ └─ DesafioFast.sln <-- Solução do backend
├─ frontend/ <-- Projeto Angular
└─ README.md <-- Este arquivo


> ⚠️ O arquivo `DesafioFast.sln` está dentro da pasta **backend/**. Abra no Visual Studio ou pelo terminal para rodar o backend.

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior  
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)  
- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0)  
- [Visual Studio 2022 ou superior](https://visualstudio.microsoft.com/) (opcional, recomendado)

---

## 🖥 Executando o Backend

### Pelo terminal
```bash
cd backend/
dotnet restore
dotnet build
dotnet run
Backend rodando em: https://localhost:7084 (ou porta configurada no projeto)
```

Pelo Visual Studio

1 - Abra DesafioFast.sln.

2 - Selecione DesafioFast como projeto de startup.

3 - Pressione F5 ou clique em Start para executar.



## 🌐 Executando o Frontend
Pelo terminal

```bash
cd frontend/
npm install
ng serve
```

Frontend disponível em: http://localhost:4200

🔹 Abra outro terminal separado para rodar o frontend enquanto o backend estiver ativo.

Pelo VS Code

1 - Abra a pasta frontend/ no VS Code.

2 - Abra um terminal integrado (Ctrl + ').

3 - Execute:

```bash
npm install
ng serve
```
4 - Acesse http://localhost:4200 no navegador.


## 🔐 Dados de Login

E-mail: user@teste.com

Senha: 1234


## 📌 Endpoints da API
| Método | Endpoint              | Descrição                          |
| ------ | --------------------- | ---------------------------------- |
| `GET`  | `/api/workshops`      | Listar todos os workshops          |
| `GET`  | `/api/workshops/{id}` | Detalhes de um workshop específico |
| `POST` | `/api/workshops`      | Criar novo workshop                |
| `GET`  | `/api/atas`           | Listar todas as atas               |
| `POST` | `/api/atas`           | Criar nova ata                     |
| `GET`  | `/api/pets`           | Listar todos os pets               |
| `POST` | `/api/pets`           | Criar novo pet                     |
| `POST` | `/api/auth/login`     | Login do usuário                   |

⚠️ Certifique-se que o backend esteja rodando antes de testar os endpoints.



## 📝 Observações

As URLs da API estão configuradas em: frontend/src/environments/environment.ts

Para testar funcionalidades como cadastro de workshops, pets e atas, siga a navegação do sistema no frontend.



## 🛠 Tecnologias utilizadas

Frontend: Angular 17, TypeScript, HTML, SCSS

Backend: .NET 7, C#, Entity Framework Core

Banco de dados: SQL Server (ou conforme configuração no backend)
