# 🏛️ Portal da Câmara Municipal de Natal - Frontend

Bem-vindo ao repositório frontend do novo portal da **Câmara Municipal de Natal (CMN)**. Este projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema React para oferecer transparência, acessibilidade e agilidade ao cidadão natalense.

---

## 🚀 Visão Geral

Este portal serve como o principal canal de comunicação entre o Poder Legislativo e a população. Ele foi projetado com foco em **UI/UX de alto nível**, garantindo que informações complexas (como processos legislativos e dados financeiros) sejam acessíveis e fáceis de entender.

---

## ✨ Principais Funcionalidades

### ♿ Acessibilidade (Padrão e-MAG)
*   **Barra de Acessibilidade:** Controles persistentes para aumento/diminuição de fonte e reset para o tamanho padrão.
*   **Alto Contraste:** Modo de visualização otimizado para usuários com baixa visão ou fotossensibilidade.
*   **VLibras:** Integração com a ferramenta de tradução para a Língua Brasileira de Sinais.
*   **Semântica Robusta:** Estrutura HTML5 pensada para total compatibilidade com leitores de tela.

### 🏠 Home Page Dinâmica
*   **Destaques de Notícias:** Grid de notícias otimizado com `next/image` para performance máxima e categorias coloridas para rápida identificação.
*   **Linha do Tempo Legislativa:** Componente de acompanhamento visual de tramitação de projetos de lei (Simulação SAPL).
*   **TV Câmara Natal:** Integração de player de vídeo para acompanhamento de sessões ao vivo e audiências.
*   **Carrossel de Vereadores:** Interface interativa com fotos dos parlamentares, partidos e acesso a perfis detalhados.
*   **Painel de Acesso Rápido:** Atalhos intuitivos para Memorial, Ouvidoria, Escola do Legislativo e Portal do Servidor.

### 📊 Portal da Transparência Funcional
*   **Busca em Tempo Real:** Localize documentos e relatórios instantaneamente através da barra de pesquisa.
*   **Filtros de Categoria:** Navegue facilmente por áreas como Finanças, Recursos Humanos e Administrativo.
*   **Central de Downloads:** Cards intuitivos para acesso a Editais, Contratos e Atas.

---

## 🛠️ Stack Tecnológica

*   **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
*   **Biblioteca:** [React 19](https://react.dev/)
*   **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
*   **Ícones:** [Lucide React](https://lucide.dev/)
*   **Carrossel:** [Embla Carousel](https://www.embla-carousel.com/)

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
*   Node.js (v18+)
*   npm ou yarn

### Instalação
1.  Clone o repositório:
    ```bash
    git clone https://github.com/nilopadilha/appcamaratransparente_front_react.git
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do Projeto

*   `src/app`: Rotas e layouts da aplicação.
*   `src/components`: Componentes reutilizáveis (Navbar, Footer, Carousel, etc.).
*   `src/components/accessibility`: Lógica e interface de ferramentas de inclusão.
*   `public`: Ativos estáticos (imagens e ícones).

---

## 📄 Documentação de Mudanças

Para um histórico detalhado de todas as implementações técnicas, consulte o arquivo [CHANGELOG.md](./CHANGELOG.md).

---
*Desenvolvido com foco na transparência pública e cidadania digital.*
