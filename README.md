# AnimeNavs

AnimeNavs é uma aplicação web que permite aos usuários explorar e descobrir séries de anime. A aplicação fornece informações detalhadas sobre cada anime, incluindo título, descrição, classificação e imagens. Além disso, oferece funcionalidades como cadastro de usuários e recomendações semanais de animes.

---

## Funcionalidades

- **Lista de Animes**: Navegue por uma lista de animes com imagens e títulos.
- **Detalhes do Anime**: Veja informações detalhadas sobre cada anime, incluindo descrição e classificação.
- **Recomendações Semanais**: Descubra um novo anime recomendado a cada semana.
- **Cadastro de Usuários**: Permite que novos usuários se cadastrem no sistema.
- **Design Responsivo**: A aplicação é projetada para funcionar bem em dispositivos desktop e móveis.

---

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Estilização**: CSS Modules
- **Backend**: Node.js (com Express)
- **Banco de Dados**: Simulado (ou pode ser integrado com MongoDB, MySQL, etc.)
- **Requisições HTTP**: Axios

---

## Instalação

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o Repositório
```bash
git clone https://github.com/yourusername/animenavs.git
cd animenavs
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Inicie o Servidor de Desenvolvimento
```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

---

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
c:\www\animenavs\
├── public\
│   ├── index.html
│   └── ...
├── src\
│   ├── components\
│   │   ├── Header\
│   │   ├── Footer\
│   │   ├── Cards\
│   │   │   └── Cards.module.css
│   │   ├── Estrelas\
│   │   └── SectionRec\
│   ├── json\
│   │   └── animes.json
│   ├── pages\
│   │   ├── Anime\
│   │   │   ├── index.js
│   │   │   └── Anime.module.css
│   │   ├── Indication\
│   │   │   ├── index.js
│   │   │   └── Indication.module.css
│   │   ├── Cadastro\
│   │   │   ├── index.js
│   │   │   └── Cadastro.module.css
│   │   └── Login\
│   ├── App.js
│   └── index.js
└── package.json
```

---

## Componentes

### Header
Exibe a barra de navegação no topo da aplicação.

### Footer
Exibe o rodapé na parte inferior da aplicação.

### Cards
Mostra uma lista de animes em formato de cartões, com imagens e títulos.

### Estrelas
Exibe a classificação de um anime em formato de estrelas.

### SectionRec
Fornece a lógica para calcular e exibir recomendações semanais de animes.

### Cadastro
Permite que novos usuários se cadastrem no sistema.

### Anime
Exibe informações detalhadas sobre um anime específico.

### Indication
Mostra a recomendação semanal de anime.

---

## Estilização

A aplicação utiliza **CSS Modules** para encapsular os estilos de cada componente, garantindo que os estilos sejam aplicados apenas ao componente correspondente.

---

## Backend

Certifique-se de que o servidor backend está configurado e rodando na porta 3000. Para iniciar o servidor:

1. Navegue até a pasta do servidor:
    ```bash
    cd server
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor:
    ```bash
    node index.js
    ```

O servidor estará disponível em `http://localhost:3000`.

---

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
