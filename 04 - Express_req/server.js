const express = require('express');
const app = express();

//http://facebook.com/profiles/id ou nome ou algum código que vai identificar o usuário ==  url params
//http://facebook.com/profiles/12345
/*?campanha=googleads&nomecampanha=seila  == ? é a iniciação de uma query string*/

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome"></input>
        <button> Enviar </button>
    </form>
    `)
});

app.get('/testes/:idUsuario?/:parametro?', (req, res) =>
{
    console.log(req.params);
    res.send(req.parametro.idUsuario);
});

app.get('/contato', (req,res) =>{
    res.send('Obrigada por entrar em contato conosco <b>Até!</b>');
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário Uhu!');
});

app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});