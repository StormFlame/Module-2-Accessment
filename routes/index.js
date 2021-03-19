var express = require('express');
var router = express.Router();
const Todo = require('../data/todos');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {todos: Todo.todos});
});

router.post('/new', function(req, res){
  Todo.todos.push({todo: req.body.todo, done: false});
  res.redirect('/');
});

router.delete('/:todo', function(req, res){
  Todo.todos.forEach(function(t){
    if(t.todo == req.params.todo){
      Todo.todos.splice(Todo.todos.indexOf(t), 1);
    }
    res.redirect('/');
  });
});

module.exports = router;
