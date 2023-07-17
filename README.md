# Miseri Sense
Servicios de lado del cliente para proyecto Miseri

# Información del proyecto
El objetivo principal de este proyecto es desarrollar un dispositivo versátil y eficiente, que brinde información valiosa sobre su entorno.

Miseri Sense es un monorepo donde se consume el código fuente y visualizamos la información donde se controla el hardware, analiza y sirven los datos de la aplicación.

# Instalación
Clona el repositorio con el comando `git clone https://github.com/Leonardo-Toledo-V/miseri-client`

Una vez dentro el proyecto:

- Instale las dependencias:
```bash
npm install 
```
- Una vez instaladas las dependencias ejecuta el siguiente comando depeniendo tu package manager:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

- Abre [http://localhost:3000](http://localhost:3000) con tu navegador.

# Estructura del proyecto
```plaintext
|--- app
|    |--- dashboard
|            |--- air
|            |     |--- page.jsx
|            |--- humidity
|            |     |--- page.jsx
|            |--- light
|            |     |--- page.jsx
|            |--- temperature
|            |     |--- page.jsx
|            |--- page.jsx
|    |--- login
|            |--- page.jsx
|    |--- fonts.js
|    |--- layout.js
|    |--- page.js
|    |--- globals.css
|    |--- not-found.js
|
|--- components
|    |--- api
|    |    |--- hello.js
|    |    
|    |--- _app.js
|    |--- _document.js
|    |--- index.js
|
|--- hooks
|    |--- NavbarProvider.jsx
|
|--- libs
|    |--- auth.js
|    |--- axios.js
|
|--- public
|    |--- icons

```

# Previsualización:

