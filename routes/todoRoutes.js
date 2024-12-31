const express = require('express');
const { createTodo, getTodos, updateTodo, shareTodo } = require('../controllers/todoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.post('/:id/share', shareTodo);

module.exports = router;

