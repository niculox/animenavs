<div align="center">

# AnimeNavs

**Uma plataforma web fluida, inclusiva e acessível para exploração, avaliação e gerenciamento de animes.**

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-005FCC?logo=css3&logoColor=white&style=for-the-badge)](https://github.com/css-modules/css-modules)
[![WCAG](https://img.shields.io/badge/WCAG_2.2-AA%2FAAA-166534?logo=w3c&logoColor=white&style=for-the-badge)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=for-the-badge)](LICENSE)

</div>

---

## Sobre o Projeto

O **AnimeNavs** é uma Single Page Application (SPA) projetada para proporcionar aos entusiastas de animes uma experiência ágil de descoberta, consulta de sinopses, avaliações e curadoria personalizada. 

Recentemente, a aplicação passou por uma **reengenharia completa de arquitetura e acessibilidade digital**, assegurando total compatibilidade com tecnologias assistivas, conformidade com os critérios internacionais da **WCAG 2.2 (Níveis AA e AAA)** e adaptabilidade fluida para qualquer resolução de tela (mobile, tablet, desktop e ultrawide).

---

## Destaques de Acessibilidade Digital (A11y)

A plataforma foi construída com base no princípio de **Inclusão por Design**:

- **Navegação Estrita por Teclado:** Skip Link global (`#main-content`) e indicadores visuais de foco de alto contraste (`:focus-visible`) em todos os componentes interativos.
- **Compatibilidade com Leitores de Tela:** Landmarks semânticos (`<main>`, `<article>`, `<section>`), atributos `aria-label`, e regiões dinâmicas com `role="status"` e `role="alert"` (`aria-live`).
- **Ergonomia Visual e Tipografia (WCAG 1.4.8):** Relação de contraste superior a **4.5:1** em todos os textos e remoção de texto justificado para evitar barreiras de leitura a pessoas com dislexia ou baixa visão.
- **Respeito a Sensibilidades Vestibulares (WCAG 2.3.3):** Desativação automática de transições bruscas e rotações contínuas quando o usuário prefere redução de movimento (`prefers-reduced-motion: reduce`).

---

## Funcionalidades

- **Busca Reativa:** Filtragem instantânea por título ou gênero com contagem de resultados anunciada para leitores de tela e botão de limpeza rápida.
- **Indicação Semanal Inteligente:** Algoritmo determinístico baseado no calendário que destaca uma obra diferente a cada semana sem requisições excessivas.
- **Sistema de Favoritos com Persistência:** Adicione ou remova animes da sua lista personalizada com sincronização automática no `localStorage`.
- **Autenticação & Rotas Protegidas:** Fluxo seguro de Login e Cadastro com transição de cards espelhada, validação em tempo real e proteção de histórico de rotas (`ProtectedRoute`).
- **Área do Usuário (MyPage):** Painel com avatar aleatório memorizado, animes favoritos salvos e recomendações dinâmicas.
- **Layout 100% Responsivo:** Construído com CSS Grid intrínseco (`auto-fill`, `minmax`) e tipografia fluida com `clamp()`.

---

## Tecnologias e Ferramentas

### Front-end
- **React.js** (Hooks, Context API, React Router v6)
- **CSS Modules** (Escopo isolado e manutenibilidade)
- **Axios** (Integração assíncrona com API REST)

### Back-end & Dados
- **Node.js & Express**
- **JSON Data Source / Render Cloud Hosting**

---

## Estrutura de Diretórios

```plaintext
animenavs/
├── public/
│   └── index.html
├── src/
│   ├── assets/              # Ícones, avatares e imagens decorativas
│   ├── components/          # Componentes reutilizáveis e modulares
│   │   ├── Banner/
│   │   ├── Cards/
│   │   ├── Estrelas/
│   │   ├── Favorites/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── ProtectedRoute/
│   │   ├── Recomendacoes/
│   │   └── Search/
│   ├── contexts/            # Provedores de estado global (Favoritos, AnimeContext)
│   ├── json/                # Base de dados mockada (animes.json)
│   ├── pages/               # Páginas e rotas da aplicação
│   │   ├── Anime/
│   │   ├── Cadastro/
│   │   ├── Home/
│   │   ├── Indication/
│   │   ├── Login/
│   │   ├── MyPage/
│   │   └── PageNotFound/
│   ├── provider/            # Contexto de autenticação (AuthContext)
│   ├── routes/              # Configuração centralizada de rotas
│   ├── App.jsx
│   ├── index.css            # Reset moderno, foco global e Skip Link
│   └── index.js
└── package.json

```

## Documentação Detalhada dos Módulos e Componentes

### Páginas (Pages)

* **`Home` (`src/pages/Home`):**  
  Ponto de entrada da aplicação. Carrega o `Header`, o componente `Container` (com o destaque da semana), a barra `Search` e o `Footer` dentro de um container semântico `<main id="main-content">`.

* **`Anime` (`src/pages/Anime`):**  
  Recebe o parâmetro dinâmico `:id` da URL. Localiza a obra no arquivo `animes.json`. Trata IDs inexistentes com uma interface de erro acessível (`role="alert"`), atualiza o `document.title` dinamicamente e renderiza sinopse e avaliação em formato legível com largura limitada a 85 caracteres.

* **`Indication` (`src/pages/Indication`):**  
  Consome o `AnimeContext` para exibir a indicação da semana em destaque com banner responsivo (`clamp()`), avaliação por estrelas e sinopse semântica.

* **`Cadastro` (`src/pages/Cadastro`):**  
  Formulário com campos `username`, `email` e `senha` (`minLength={6}`). Inclui mensagens acessíveis via `aria-live`, bloqueio de envio duplo via `aria-busy={loading}` e layout em grid com imagem lateral espelhada.

* **`Login` (`src/pages/Login`):**  
  Formulário de login integrado ao `AuthContext`. Valida credenciais com a API, redireciona o usuário para a página de onde veio preservando o histórico e exibe alertas embutidos em caso de erro.

* **`MyPage` (`src/pages/MyPage`):**  
  Rota protegida. Exibe o avatar sorteado e memorizado via `useMemo`, nome de usuário autenticado, botão de logout de alto contraste, grade de favoritos e bloco de recomendações.

* **`PageNotFound` (`src/pages/PageNotFound`):**  
  Página de erro 404 para rotas não mapeadas. Contém ilustração giratória que respeita `prefers-reduced-motion` e botão de retorno acessível para a página inicial.

---

### Componentes Compartilhados (Components)

* **`Header`:**  
  Barra de navegação fixada no topo com suporte a links acessíveis e menu responsivo.

* **`Footer`:**  
  Rodapé contendo créditos e links estruturados com tags semânticas.

* **`Banner`:**  
  Gera um banner randômico a partir de imagens da aplicação, utilizando `useMemo` para evitar trocas a cada re-renderização e marcado com `aria-hidden="true"`.

* **`Cards`:**  
  Renderiza grades responsivas (`repeat(auto-fill, minmax(260px, 1fr))`) contendo a imagem do anime, título, link acessível e botão individual para favoritar.

* **`Container`:**  
  Bloco Hero responsivo que apresenta uma obra em destaque na página inicial.

* **`Estrelas`:**  
  Converte o número de estrelas recebido por prop em ícones visuais e adiciona uma descrição acessível via `aria-label="Avaliação: X de 5 estrelas"`.

* **`Favorites`:**  
  Exibe a coleção de animes favoritados pelo usuário consumindo o `useFavoriteContext`. Apresenta estado vazio caso não existam favoritos.

* **`Recomendacoes`:**  
  Embaralha uma seleção de obras utilizando cópia imutável de array (`[...rec].sort()`) memorizada para sugerir títulos ao usuário.

* **`Search`:**  
  Input de busca em tempo real com `type="search"`, botão para limpar texto, contagem de resultados anunciada via `aria-live="polite"` e filtro por título/gênero.

* **`ProtectedRoute`:**  
  Guardião de rotas que avalia `isAuthenticated` e `loading`. Exibe indicador acessível de carregamento e redireciona rotas não autorizadas usando `replace`.

---

### Contextos Globais (Contexts & Providers)

* **`FavoritoProvider` (`src/contexts/Favorito.js`):**  
  Gerencia a lista de favoritos com inicialização preguiçosa no `localStorage`. Expõe a lista `favorite`, a função de alternância atômica `addFavorito` (usando `useCallback`) e o verificador `isFavorite`.

* **`AnimeProvider` (`src/contexts/AnimeContext.js`):**  
  Calcula a indicação semanal por divisão modular sobre as semanas do ano decorridas (`Date.now()`), garantindo valor fixo e determinístico durante toda a semana.

* **`AuthProvider` (`src/provider/AuthContext.js`):**  
  Gerencia tokens de sessão, credenciais do usuário logado e funções de `login`, `logout` e `checkAuth`.

---

## API e Backend

Caso utilize o servidor backend em Node.js/Express, os endpoints esperados são:

| Método | Rota | Descrição | Corpo da Requisição (Body) |
| :--- | :--- | :--- | :--- |
| `POST` | `/Cadastro` | Registra um novo usuário | `{ "username": "...", "email": "...", "senha": "..." }` |
| `POST` | `/Login` | Autentica o usuário e retorna token/sessão | `{ "username": "...", "senha": "..." }` |

---

## Instalação e Execução Local

### Pré-requisitos
* **Node.js** (versão 16.x ou superior recomendada)
* Gerenciador de pacotes **npm** ou **yarn**
* **Git** instalado no sistema

### 1. Clonar o repositório
```bash
git clone [https://github.com/seu-usuario/animenavs.git](https://github.com/seu-usuario/animenavs.git)
cd animenavs
```

### 2. Instalar as dependências do Front-end
```bash
npm install
```

### 3. Iniciar o servidor de desenvolvimento
```bash
npm start
```
A aplicação estará disponível em `http://localhost:3000`.

### 4. (Opcional) Executar o servidor Backend localmente
Se você estiver rodando a API localmente na pasta `server/`:
```bash
cd server
npm install
npm start
```

---

## Testes e Auditoria de Qualidade

A qualidade técnica e acessibilidade da aplicação foram auditadas com:

* **Auditoria Automatizada (axe DevTools & Lighthouse):** 100% de conformidade com boas práticas, SEO e diretrizes da WCAG 2.2 AA.
* **Navegação Exclusiva por Teclado:** Validação completa de todos os fluxos de autenticação, catálogo, busca e formulários sem necessidade de mouse.
* **Leitores de Tela:** Testado e aprovado com NVDA (Windows) e VoiceOver (macOS) para verificação de regiões dinâmicas (`aria-live`) e marcos semânticos (*landmarks*).
* **Resiliência a Zoom:** Suporte a ampliação de página de até 400% sem quebra de containers ou sobreposição de texto.

---

## Como Contribuir

1. Faça um Fork do projeto (`fork`).
2. Crie uma branch para sua funcionalidade ou correção:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Realize seus commits seguindo o padrão de **Conventional Commits**:
   ```bash
   git commit -m "feat(cards): add custom badge indicator for top rated animes"
   ```
4. Envie as alterações para sua branch remota:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra uma **Pull Request** detalhando as alterações e testes realizados.

---

## Licença e Autoria

Este projeto está licenciado sob a licença **MIT**. Para mais detalhes e permissões de uso, consulte o arquivo [LICENSE](LICENSE).

---

<div align="center">
  Desenvolvido por <strong>Nícolas Amaral</strong>.<br>
  <em>Engenharia de Software, Acessibilidade Digital e Design Inclusivo.</em>
</div>
