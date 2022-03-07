// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())

const express = require('express');
const cors = require('cors');

// Routes
const { toDosRouter } = require('./routes/todos.routes');

// Utils
const { sequelize } = require('./utils/dataBase');

// Init the express app
const app = express();

app.use(cors());

// Enable JSON incoming data
app.use(express.json());

// Endpoints
app.use('/api/v1/todos', toDosRouter);

// Authenticate the conexion with the database
sequelize
    .authenticate()
    .then(() => console.log('Database authenticate'))
    .catch((err) => console.log(err));

// syncronized the models
sequelize
    .sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));

app.listen(4000, () => {
    console.log('express are running..');
});
