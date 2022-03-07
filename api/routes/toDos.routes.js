// Get express
const express = require('express');

// Controllers
const {
    getAllToDos,
    createNewToDo,
    updateToDoPatch,
    deleteToDo
} = require('../controllers/toDos.controllers');

const router = express.Router();

// GET fetch all ToDos
router.get('/', getAllToDos);

// POST Create new ToDo
router.post('/', createNewToDo);

// PATCH Update ToDo given an ID
router.patch('/:id', updateToDoPatch);

// DELETE Delete ToDo given an ID (destroy or soft delete)
router.delete('/:id', deleteToDo);

// Exports
module.exports = { toDosRouter: router };
