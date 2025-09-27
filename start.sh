#!/bin/bash
# Vai para a pasta do backend
cd "Back-end/DesafioFast" || exit 1

# Restaura os pacotes e faz build
dotnet restore
dotnet build

# Inicia o projeto na porta fornecida pelo Railway
dotnet run --urls=http://0.0.0.0:$PORT
