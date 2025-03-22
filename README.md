## Diagrama de Classes Inicial

    ```` class Usuario {
        +int id
        +string nome
        +string email
        +string senha
        +datetime dataCadastro
    }

    class Animacao {
        +int id
        +string titulo
        +string descricao
        +string genero
        +datetime dataLancamento
    }

    class Comentario {
        +int id
        +string conteudo
        +datetime dataPostagem
        +int usuarioId
        +int animacaoId
    } ````

    Usuario "1" --> "*" Comentario : escreve
    Animacao "1" --> "*" Comentario : recebe
