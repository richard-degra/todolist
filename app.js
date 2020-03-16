const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// conexão mongoose //

mongoose.connect("mongodb://localhost/todo");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Schema do Mongoose

const todoSchema = new mongoose.Schema({
    name: String
});

var Todo = mongoose.model("Todo", todoSchema);

//var todoList = [
    //"Lavar o carro",
    //"Sair de casa"
//]


// Rotas começam por aqui //

app.get('/', function(req, res) {
    Todo.find({}, function(err, todoList) {
        if(err) console.log(err);
        else {
           res.render('index.ejs', {todoList: todoList}); 
        }
    })   
});

// Caminho para todas as outras rotas //

app.get('*', function(req, res) {
    res.send("<h1>Some daqui meu</h1>");
});

// rota botão adicionar 

app.post('/novotodo', function(req,res) {
    console.log("Todo criado")
    var NewItem = new Todo ({
        name: req.body.item});
    Todo.create(NewItem, function(err, Todo) {
        if (err) console.log(err);
        else {
            console.log("Novo Todo: " + NewItem);
        }
    });
    res.redirect('/');
})

// servidor está respondendo na porta 3000 //

app.listen(1234, function() {
    console.log("servidor iniciado com sucesso na porta 1234");

});