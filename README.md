
BlueLogic CRUD Project

Este é um projeto de CRUD simples que utiliza NestJS para o backend (API RESTful) e Vue.js para o frontend. O sistema permite a criação, leitura, atualização e exclusão de registros, armazenados em um array no backend.

Tecnologias Utilizadas

- Backend: NestJS
- Frontend: Vue.js
- Node.js: v18.x.x
- NPM: v9.x.x

Índice:

- Requisitos
- Instalação
- Rodando o Projeto
- Backend (NestJS)
- Frontend (Vue.js)
- Estrutura de Pastas
- Endpoints da API
- Funcionalidades

Requisitos:

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

- Node.js (versão 18.x ou superior)
- NPM (ou Yarn, se preferir)
- Git (opcional, para controle de versão)

Instalação:

1. Clone o repositório e descompacte o projeto
git clone https://bitbucket.org/seu-usuario/blue_logic.git
2. Instale as dependências do backend (NestJS)
cd backend
npm install

3. Instale as dependências do frontend (Vue.js)
cd ../frontend-vue
npm install

Rodando o Projeto:

Backend (NestJS)
Para rodar o servidor backend (API), utilize o seguinte comando:

cd backend
npm run start:dev

Por padrão, o servidor será executado em: http://localhost:8080

Frontend (Vue.js):

Para rodar o frontend em Vue.js, utilize o comando:
cd frontend-vue
npm run serve

A aplicação Vue.js estará disponível em: http://localhost:8081

Estrutura de Pastas:

A estrutura básica do projeto é a seguinte

blue_logic/
│
├── backend/           # API NestJS
│   ├── src/
│   ├── test/
│   ├── .eslintrc.js
│   └── main.ts        # Arquivo principal da API
│
├── frontend-vue/      # Interface Vue.js
   ├── src/
   ├── public/
   └── vue.config.js

Endpoints da API:

Os principais endpoints da API são:

- GET /items: Retorna todos os registros.
- POST /items: Cria um novo registro.
- PUT /items/id: Atualiza um registro existente.
- DELETE /items/id: Exclui um registro.

Funcionalidades:

Backend (NestJS)

- CRUD: A API permite operações de criação, leitura, atualização e exclusão de registros armazenados em arrays.
- Validação: Implementação de validações básicas para os dados enviados nas requisições.
- Endereçamento: API RESTful seguindo boas práticas de organização de rotas.

Frontend (Vue.js):

- Integração com API: O frontend consome os dados da API NestJS utilizando chamadas HTTP.
- Interface Responsiva: A interface permite criar, visualizar, atualizar e deletar registros interagindo diretamente com a API.
- Formulários Dinâmicos: Validações de formulário no frontend para garantir a consistência dos dados enviados.