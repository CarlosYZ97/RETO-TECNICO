# ServerlessJS + AWS + Lambda + DynamoDB

### Visión General

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


Plantilla Serverless

```
sls create -t aws-nodejs
```



## Ejecutando las pruebas ⚙️

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

## Despliegue 📦

```
sls deploy
sls remove
```




# Título del Proyecto

_Acá va un párrafo que describa lo que es el proyecto_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Da un ejemplo
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_