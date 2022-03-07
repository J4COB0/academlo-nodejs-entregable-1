// Models
const { Todo } = require('../models/toDo.model');

// Utils
const { filterObject } = require('../utils/filterObject');

exports.getAllToDos = async (req, res) => {
    try {
        const todos = await Todo.findAll({ where: { status: 'active' } });
        res.status(200).json({
            status: 'success',
            data: {
                todos: todos
            }
        });
    } catch (error) {
        console.log('error');
    }
};

exports.createNewToDo = async (req, res) => {
    try {
        const { content } = req.body;

        if ( !content || content.length === 0 ) {
            res.status(400).json({
                status: 'error',
                message: 'insure to include title and description'
            });
            return;
        }

        const newToDo = await Todo.create({ content: content });

        res.status(201).json({
            status: 'success',
            data: {
                newToDo: newToDo
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.updateToDoPatch = async (req, res) => {
    try {
        const { id } = req.params;

        const data = filterObject(req.body, 'content');
        const toDo = await Todo.findOne({
            where: { id: id, status: 'active' }
        });

        if (!toDo) {
            res.status(404).json({
                status: 'error',
                message: 'can update user, invalid ID'
            });
            return;
        }

        await toDo.update({ ...data });

        res.status(204).json({
            status: 'success'
        });
    } catch (error) {
        console.log('error');
    }
};

exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.params;
        const toDo = await Todo.findOne({
            where: { id: id, status: 'active' }
        });

        if (!toDo) {
            res.status(404).json({
                status: 'error',
                message: 'not found user, invalid ID'
            });
            return;
        }

        const status = 'deleted';
        await toDo.update({ status });

        res.status(204).json({
            status: 'Success'
        });
    } catch (error) {
        console.log(error);
    }
};
