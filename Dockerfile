# ---------- STAGE 1: Build Angular ----------
FROM node:20 AS front-build

# Diretório de trabalho para o front
WORKDIR /app/front

# Copia o package.json e package-lock.json
COPY Front-end/Desafio-Fast/package*.json ./

# Instala dependências
RUN npm install

# Copia todo o front-end
COPY Front-end/Desafio-Fast/ .

# Build do Angular em modo produção
RUN npm run build -- --output-path=dist --configuration production

# ---------- STAGE 2: Build .NET ----------
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS back-build

# Diretório de trabalho para o back
WORKDIR /app/back

# Copia os arquivos .csproj e restaura dependências
COPY Back-end/DesafioFast/*.csproj ./
RUN dotnet restore

# Copia todo o back-end
COPY Back-end/DesafioFast/ ./

# Publica o back-end
RUN dotnet publish -c Release -o /app/publish

# ---------- STAGE 3: Runtime ----------
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

# Copia o back-end publicado
COPY --from=back-build /app/publish ./back

# Copia o front-end buildado para wwwroot do back-end
COPY --from=front-build /app/front/dist ./back/wwwroot

# Define variável de ambiente do Railway
ENV DOTNET_RUNNING_IN_CONTAINER=true
ENV DOTNET_HOST=0.0.0.0
ENV DOTNET_PORT=$PORT

# Expõe a porta do back-end
EXPOSE $PORT

# Start do back-end
WORKDIR /app/back
ENTRYPOINT ["dotnet", "DesafioFast.dll"]
