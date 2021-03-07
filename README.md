# ServerlessJS + AWS + Lambda + DynamoDB

### Visión General

- Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
- Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
- Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
- Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
- Crear un endpoint GET que muestre la data almacenada.

[API de prueba SWAPI: https://swapi.py4e.com/documentation](https://4g31l4v4fc.execute-api.us-east-1.amazonaws.com/dev/swagger)

### Ficheros

    .
    ├───controllers/
    │   ├───peopleController.js
    │   └───planetController.js
    ├───database/
    │   └───dynamoDB.js
    ├───helpers/
    │   ├───consumers/
    │   │   └───starwars.js
    │   └───response/
    │       └───apiResponses.js
    ├───models/
    │   ├───peopleModel.js
    │   └───planetMode.js
    ├───test/
    │   ├───createPeople.js
    │   ├───getAllPeople.js
    │   └───updatePeople.js
    ├───util/
    │   └───sortBtId.js
    ├───.gitignore
    ├───package-lock.json
    ├───package.json
    ├───README.md
    └───serverless.yml

### Documentación de APIS

[Documentación de APIS en SWAGGER](https://4g31l4v4fc.execute-api.us-east-1.amazonaws.com/dev/swagger)

### Instalación 🔧

Configurar los environment de AWS

```
serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET_KEY
```
Instalar los módulos de node

```
npm install
```

### Ejecutando las pruebas ⚙️

```
CREANDO FICHEROS
sls create test -f createPeople
sls create test -f getAllPeople
sls create test -f updatePeople

EJECUTANDO PRUEBAS

sls invoke test -f createPeople 
sls invoke test -f getAllPeople
sls invoke test -f updatePeople
```

### Despliegue 📦

```
sls deploy
sls remove
```