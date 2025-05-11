📌 Visão Geral
Aplicação full-stack para gerenciamento de equipamentos industriais, com:

Frontend em React + TypeScript + TailwindCSS

Backend em Node.js + Express + TypeScript

Banco de dados MongoDB (com Prisma ORM)

CRUD completo para equipamentos, inspeções e comunicações

🚀 Funcionalidades
Cadastro de Equipamentos

Dados técnicos e localização

Relacionamento com inspeções e comunicações

Gestão de Inspeções

Registro de condições técnicas

Histórico de manutenções

Controle de Comunicações

Configurações de rede e modems

Status de conectividade

Relatórios

Estatísticas por cidade/região

Status de equipamentos

🛠 Tecnologias Utilizadas
Frontend
React 18

TypeScript

TailwindCSS

Axios (consumo de API)

React Hook Form (formulários)

React Router (navegação)

Backend
Node.js

Express

TypeScript

Prisma ORM

MongoDB

Zod (validação)

📦 Estrutura do Projeto

├── equipamentos15kv/              # Aplicação React
│   ├── public/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── types/         # Tipos TypeScript
│   │   ├── App.tsx        # Componente principal
│   │   └── main.tsx       # Ponto de entrada
│   └── package.json
└── README.md              # Este arquivo

🔌 Pré-requisitos
Node.js 18+

Yarn ou npm

Git

🛠 Instalação
1. Clonar o repositório
git clone https://github.com/vanijor/equipamentos15kv.git


2. Configurar Frontend
cd equipamentos15kv
npm install or yarn install

🚀 Executando a Aplicação

Frontend
npm run dev or yarn run dev
# A aplicação estará disponível em http://localhost:5173/