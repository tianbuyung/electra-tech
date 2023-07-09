# Electra Tech

This full stack web application offers a seamless and efficient ordering system for electronic products. Powered by Node.js and Express.js, it ensures smooth server-side operations. PostgreSQL and Sequelize provide robust data management capabilities, guaranteeing accurate order processing. Vue.js, along with Vue Router and Pinia, creates an intuitive and streamlined user experience, reminiscent of navigating through a user-friendly electronic device. With the help of Tailwind CSS, the application showcases a modern and visually captivating UI, reminiscent of the elegance and sophistication of electronic products.

## Deployment

- <a href="https://electra-tech-server.tianweb.dev/" target="_blank">Link to Server: https://electra-tech-server.tianweb.dev/</a>
- <a href="https://electra-tech.tianweb.dev/" target="_blank">Link to Client: https://electra-tech.tianweb.dev/</a>

## Recommended First Setup

To run smoothly this application. Please install these tools in your local environment:

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en) LTS version 18.16.1
- [PostgreSQL](https://www.postgresql.org/download/) Version 15.3
- [Postman](https://www.postman.com/downloads/) Latest Version
- [Docker](https://www.docker.com/) Latest Version

## Project Setup

1. Clone this repo

   ```sh
   git clone https://github.com/tianbuyung/electra-tech.git
   ```

2. Mount the directory using terminal.

   ```sh
   cd electra-tech
   ```

## Customize Configuration

### For Server

1. Mount to server directory using terminal

   ```sh
   cd server
   ```

2. Install dependencies via terminal

   ```sh
   npm install
   ```

3. Create `.env` file in server directory with contents according to the example (see [.env.example](server/.env.example)) ensure you fill `NODE_ENV`, `DATABASE_URL` for production only & `JWT_SECRET_KEY` with your own data

4. Check [Database Configuration](server/config/config.json) ensure username and password are correct according your local configuration

5. Create database in your local computer

   ```sh
   npx sequelize-cli db:create
   ```

6. Migrate model into your database

   ```sh
   npx sequelize-cli db:migrate
   ```

#### Compile for Development

1. Run the server in development mode

   ```sh
   npm run dev
   ```

#### Compile for Production

1. Please make sure `NODE_ENV` is set to `production` in .env file

2. Install and run docker in your instance

3. Create images, containers and volumes

   ```sh
   docker compose up -d
   ```

4. Migrate model into your database

   ```sh
   docker exec node_app sequelize db:migrate --env production
   ```

#### Interaction with Server

- PORT for development is 3000 and for production via docker is 80
- You can try API for this server on <http://localhost:[PORT]> via postman
- You can try register API: <http://localhost:[PORT]/api/register> with `POST` method
- You can try login API and get your Token (JWT): <http://localhost:[PORT]/api/login> with `POST` method
- Then you can create order and see the orders, to see more endpoints on this [API Documentation](server/README.md)

### For Client

1. Mount to client directory using terminal

   ```sh
   cd client
   ```

2. Install dependencies via terminal

   ```sh
   npm install
   ```

3. Create `.env` file in client directory with contents according to the example (see [.env.example](client/.env.example)) ensure you fill `VITE_SERVER_URL` with your own data

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

#### Interaction with Client

- PORT for development is 5173
- You can try frontend for this app on <http://localhost:5173>
- You can register, login, create order and see orders also order detail in website page
