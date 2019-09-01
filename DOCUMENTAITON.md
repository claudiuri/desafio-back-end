# api-task
API REST para cadastro de tarefas

## Instalação
* [Baixe](https://github.com/claudiuri/cubos/archive/master.zip) o projeto ou dê um `gitclone`
* Acesse o a pasta do projeto pelo terminal
* [Postman Conlletion](https://www.getpostman.com/collections/f82cae0b0e650121d7ff)
#### Execute o comando 'npm install' para instalar as dependências do projeto
```
npm install
```

## Variáveis de ambiente
```
DB=mongodb://localhost/taskControl
PORT=3333
JWT_PRIVATEKEY=taskControl_api
SESSION_NAME=sid
SESSION_SECRET=taskControl_api
```

## Execução da API 
Depois de [instalar](#instalação) e criar as variáveis de ambiente basta executar o comando `npm start` no terminal e pronto! A api esta em `http://localhost:3333/` ! :rocket:

## Como funciona
| rotas                    | descrição                 |
|:-----------------------------|:----------------------------|
| `api/users`    POST                  | criação de usuário |
| `api/login`    POST                  | login do usuário |
| `api/logout`    POST                  | login do usuário |
| `api/tasks`    GET                  | listagem de todas as tarefas |
| `api/tasks/:id`    GET                  | pega uma tarefa específica |
| `api/tasks/:id`    DEL                  | remoção de tarefa |
| `api/tasks/:id`    PUT                  | atualização de tarefa |

Para usuário conseguir cadastrar, listar, atualizar e deletar ele precisa está logado ou acabaod de fazer o cadastro

* Cadastro de usuário

```

  {
	"name": "claudiuri",
	"email": "email@email.com",
	"password": "123456"
  }

```

* Login do usuário

```

  {
	"email": "email@email.com",
	"password": "123456"
  }

```

* Logout do usuário

```

  {
	/** NÃO PRECISA ENVIAR NADA **/
  }

```