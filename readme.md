# 🚐 LEVAÊ

> **Conectando pessoas, facilitando caminhos.**

O **Levaê** é uma plataforma web que conecta **passageiros e motoristas**, facilitando o compartilhamento de caronas entre **Irecê e cidades da região**.

A proposta é tornar os deslocamentos mais **práticos, acessíveis e colaborativos**, aproximando quem precisa viajar de quem já está indo para o mesmo destino.

---

## 📁 Estrutura do Projeto

O projeto foi refatorado para **React** (com Vite) e usa **React Router DOM** para a navegação.

```text
Projeto WEB/
│
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── css/          → bootstrap-custom.css, login.css, admin.css
│   │   ├── imagens/
│   │   └── audios/
│   ├── components/
│   │   ├── Header.jsx      → cabeçalho com logotipo e título
│   │   ├── Navbar.jsx      → menu de navegação entre as páginas
│   │   ├── Footer.jsx      → rodapé com autoria
│   │   ├── LoginForm.jsx   → formulário de autenticação
│   │   ├── UserTable.jsx   → tabela de usuários do painel admin
│   │   ├── StatusBadge.jsx → badge de status do usuário
│   │   ├── InfoCard.jsx    → cards "Sobre" e "Como funciona"
│   │   ├── FeatureCard.jsx → cards "Por que usar o Levaê?"
│   │   └── Cidades.jsx     → lista de cidades atendidas
│   ├── pages/
│   │   ├── Home.jsx   → rota /
│   │   ├── Login.jsx  → rota /login
│   │   └── Admin.jsx  → rota /admin
│   ├── App.jsx        → definição das rotas
│   └── main.jsx       → ponto de entrada
├── index.html
├── package.json
├── vite.config.js
├── vercel.json        → faz as rotas funcionarem ao recarregar a página na Vercel
└── readme.md
```

### ▶️ Como rodar

```bash
npm install
npm run dev
```

Para gerar a versão de produção: `npm run build` (gera a pasta `dist/`).

### 🌐 Deploy

Link público: _(colocar aqui o link da Vercel)_

---

## 🎯 Objetivo

O **Levaê** busca facilitar a conexão entre **motoristas que possuem vagas disponíveis** e **passageiros que precisam se deslocar** entre Irecê e outras cidades da região.

### ✨ Principais ideias

* 🚗 Conectar motoristas e passageiros;
* 📍 Facilitar viagens entre cidades da região;
* 🤝 Incentivar o compartilhamento de caronas;
* 💰 Tornar os deslocamentos mais acessíveis;
* 🛣️ Simplificar a busca por viagens e destinos.

---

## 🎨 Identidade do Projeto

O nome **Levaê** representa a ideia de **levar pessoas aos seus destinos**, transmitindo uma proposta simples, próxima e fácil de lembrar.

O projeto utiliza elementos visuais relacionados a **mobilidade, localização e transporte**, reforçando a ideia de conexão entre pessoas e caminhos.

---

## 💻 Tecnologias

O projeto é desenvolvido utilizando tecnologias web, com a seguinte organização:

* **React** + **Vite** — componentes e build;
* **React Router DOM** — navegação entre as páginas;
* **Bootstrap 5** e **Boxicons** — layout e ícones;
* **CSS3** — estilização e identidade visual;
* **Imagens e ícones** — elementos gráficos da interface.

---

### 👩‍💻 Projeto

**Levaê — Conectando pessoas, facilitando caminhos.**