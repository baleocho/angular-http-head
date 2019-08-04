# Configuraciones

Para ejecutar el código:
1) Ejecutar npm install dentro de la carpeta /angular-http-head para descargar las librerias necesarias.
2) Ejecutar ng build dentro de la carpeta /angular-http-head para transpilar el código, se guardara dentro de la carpeta /dist.
3) Entrar a carpeta /dist con la consola de comandos.
4) Ejecutar npm install dentro de la carpeta /angular-http-head para descargar las librerias necesarias.
5) Ejecutar npm run dev para iniciar el servidor de nodemon.
6) Se ejecutará en localhost:3000 por defecto.
7) Entra a localhost:3000/home para acceder a la interfáz.

Proceso:
El front (Angular) hace una petición POST HttpRequest a la ruta localhost:300/api/verificarDisponibilidad/api/verificarDisponibilidad donde le envía el body que tiene la url a la cual el servidor hará un HEAD HttpRequest gracias a la libreria request(npm) y devuelve el head, statusCode y statusMessage que obtiene.

Notas:
El front (Angular 8) usa HttpClient para comunicarse con el back (Node.js) el cual utiliza la libreria express(npm) para configurar y ejecutar el servidor, usa morgan(npm) para ver las peticiones al servidor en la consola de comandos, usa nodemon(npm) en vez de node para ejecutar el servidor para que se actualice cada vez que se realicen cambios en el código y por ultimo utiliza la libreria request(npm) para realizar peticiones head a urls externas.
La libreria body-parser (npm) es solo para aceptar peticiones tipo Json.

Ojo, el HttpClient de Angular (Front) solo funciona con servidores en el mismo entorno-servidor-dominio.

## AngularHttpHead

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
