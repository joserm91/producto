# producto

Pequeña aplicación Angular generada con Angular CLI.

Estado
- Repositorio inicial creado y empujado a https://github.com/joserm91/producto
- CI básico configurado con GitHub Actions (build + tests si existen)

Comandos útiles
- Desarrollo (servidor con recarga):
  ```powershell
  npm start
  # o
  ng serve --open
  ```
- Build de producción:
  ```powershell
  npm run build
  ```
- Tests (si están configurados):
  ```powershell
  npm test
  ```

CI
- Existe la acción `.github/workflows/ci.yml` que corre `npm ci`, `npm run build` y `npm test` en `push` y `pull_request` sobre `master`.

Branch protection
- La rama `master` está protegida para exigir revisión y checks automáticos (revisión mínima requerida: 1). Los checks a esperar son los de la acción `build`.

Siguientes pasos recomendados
- Revocar el token de uso único que creaste (https://github.com/settings/tokens) si ya no lo necesitas.
- Configurar `git` globalmente con tu nombre/email:
  ```powershell
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu@correo"
  ```
- Revisar la acción CI en https://github.com/joserm91/agents-training-app/actions

Contacto
- Si quieres que ajuste la configuración (hacer privado el repo, añadir lint, coverage, o pipelines más complejos), dime y lo hago.
# AgentsTrainingApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
