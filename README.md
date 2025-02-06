# Chat Room App
Una aplicación de chat en tiempo real construida con React, Socket.IO, Node.js y Express. Permite a los usuarios iniciar sesión con un nickname, enviar y recibir mensajes en tiempo real, agregar emojis y disfrutar de una experiencia de usuario fluida y responsiva.

## **Descripción**
Esta aplicación de chat permite a los usuarios conectarse a una sala de chat en tiempo real. Cada usuario se identifica mediante un userId único (generado y gestionado globalmente usando Context API y almacenado en sessionStorage) y un nickname proporcionado durante el login. La comunicación en tiempo real se realiza mediante Socket.IO, lo que permite que los mensajes se envíen y se reciban instantáneamente. Además, se incluye un selector de emojis para enriquecer la experiencia del usuario.

## **Características**
Chat en tiempo real: Mensajes enviados y recibidos instantáneamente gracias a Socket.IO.
Login con Nickname: Los usuarios se autentican ingresando un nickname.
Identidad de usuario persistente: Se genera un userId único por sesión para cada usuario.
Soporte para Emojis: Integración con emoji-picker-react y funcionalidad para cerrar el picker al hacer clic fuera.
Interfaz responsiva: Diseñada con Tailwind CSS para adaptarse a distintos tamaños de pantalla.
Auto-scroll: La lista de mensajes se desplaza automáticamente hacia abajo al recibir nuevos mensajes.

## **Tecnologías**
- Frontend: React, TypeScript, Context API, Tailwind CSS, emoji-picker-react, react-icons
- Backend: Node.js, Express, Socket.IO
- Utilidades: uuid para la generación de identificadores únicos

## **Instalación**
*Prerrequisitos*
- Node.js (v14 o superior)
- npm o yarn

## **Uso**
1. Abre la aplicación en tu navegador.
2. Ingresa tu nickname en la pantalla de login.
3. Una vez autenticado, podrás ver la sala de chat.
4. Escribe mensajes en el campo de entrada y envíalos usando el botón o presionando Enter.
5. Agrega emojis utilizando el selector de emojis.
6. Abre la aplicación en diferentes navegadores o en modo incógnito para ver cómo cada usuario tiene su propio userId y nickname.

## **Contribuciones**
¡Las contribuciones son bienvenidas!
Si tienes sugerencias, mejoras o encuentras algún error, por favor crea un issue o envía un pull request. Para comenzar:

## **Forkea el repositorio**
1. Crea una rama para tu feature o fix (git checkout -b feature/nueva-funcionalidad).
2. Realiza tus cambios y commitea (git commit -m 'Agrega nueva funcionalidad').
3. Envía tu rama a tu repositorio fork (git push origin feature/nueva-funcionalidad).
4. Abre un Pull Request.

## **Licencia**
Este proyecto se distribuye bajo la licencia MIT.

## **Agradecimientos**
- Socket.IO por facilitar la comunicación en tiempo real.
- React y TypeScript para una experiencia de desarrollo robusta.
- Tailwind CSS por el rápido desarrollo de una interfaz responsiva.
- A todas las bibliotecas de terceros que hicieron este proyecto posible.
