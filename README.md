# Friendly Hands

Friendly Hands é um aplicativo que conecta usuários a provedores de serviços, permitindo que os usuários agendem serviços de acordo com suas necessidades.

## Funcionalidades

- **Usuário:**

  - Sign in (login) e sign up (cadastro) de usuários.
  - Acessar categorias de serviços disponíveis.
  - Agendar data e horário para serviços desejados.

- **Provider (provedor de serviços):**
  - Sign in (login) e sign up (cadastro) de provedores.
  - Escolher categorias de serviços a serem oferecidas.

## Pré-requisitos

- Node.js (versão X.X.X)
- TypeScript (versão X.X.X)
- Prisma (versão X.X.X)
- Joy (versão X.X.X)

## Instalação

1. Clone este repositório: `git clone https://github.com/eduardaricaldes/maoamiga-back`
2. Acesse o diretório do projeto: `cd maoamiga-back`
3. Instale as dependências: `npm install`

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Exemplo:

   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/"
   ```

2. Execute as migrações do banco de dados:
   ```shell
   npx prisma migrate dev
   ```

## Uso

1. Execute o aplicativo localmente:

   ```shell
   npm run dev
   ```

2. Acesse o aplicativo no navegador: `http://localhost:3000`
