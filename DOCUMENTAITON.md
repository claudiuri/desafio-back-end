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

Para usuário conseguir cadastrar, listar, atualizar e deletar ele precisa está logado ou acabado de fazer o cadastro

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

### Tarefas

* Cadastro da tarefa 

```
POST

{
  "name": "Estudar matematica",
  "description": "estudar para o prova",
  "date": "2019-05-12",
  "done": false,
  "canceled": false
}

```

* Listagem das tarefas
  

```
GET

[
    {
        "_id": "5d6aa50f04a26e2b889d76fe",
        "name": "Estudar matematica",
        "description": "estudar para o prova",
        "date": "2019-05-12T00:00:00.000Z",
        "done": true,
        "canceled": true,
        "__v": 0
    },
    {
        "_id": "5d6b0e3f3f82e433e0c1e8ec",
        "name": "Estudar matematica",
        "description": "estudar para o prova",
        "date": "2019-05-12T00:00:00.000Z",
        "done": false,
        "canceled": false,
        "__v": 0
    }
]
```

* Listar apenas uma tarefa

```
GET http://localhost:3333/api/tasks/:id (_id da tarefa)
```

* Deletar tarefa

```
DEL http://localhost:3333/api/tasks/:id (_id da tarefa)
```

* Atualizar tarefa
  
```
PUT http://localhost:3333/api/tasks/:id (_id da tarefa)

{
  "name": "Estudar matematica",
  "description": "estudar para o prova",
  "date": "2019-05-12",
  "done": false,
  "canceled": false
}

```
# Contato :envelope:
* E-mail: claudio.y07@gmail.com
* Linkedin: https://www.linkedin.com/in/claudiuri/