### ServerlessJS + AWS + Lambda + DynamoDB

# Visión General

Crear una API en Node.js con el framework Serverless.js para un despliegue en AWS.
Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
Integrar la API de prueba StarWars API (lineas abajo está el link) se deben integrar uno o más endpoints.
Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
Crear un endpoint GET que muestre la data almacenada.

[API de prueba SWAPI: https://swapi.py4e.com/documentation](https://swapi.py4e.com/documentation)

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




