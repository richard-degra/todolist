const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var todo = [
    "Lavar o carro",
    "Sair de casa"
]


// Rotas começam por aqui //

app.get('/', function(req, res) {
    res.render('index.ejs');
});

// Caminho para todas as outras rotas //

app.get('*', function(req, res) {
    res.send("<h1>Some daqui meu</h1>");
});

// rota botão adicionar 

app.post('/novotodo', function(req,res) {
    console.log("Todo criado")
    var item = req.body.item;
    todo.push(item);
    res.redirect('/');
})

// servidor está respondendo na porta 3000 //

app.listen(1234, function() {
    console.log("servidor iniciado com sucesso na porta 1234");

});