const express = require('express');
const server = express();
// At the top of your server.js
process.env.PWD = process.cwd()

// Then
server.use(express.static(process.env.PWD + '/public'));




server.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }
  </style>
  </head>
  <body>
  
  <h2 style="text-align:center"></h2>
  
  <div class="card">
    <img src="/team1.jpg" alt="Diego" style="width:100%">
    <h1>Diego Ernani</h1>
    <p class="title">Software Developer, Matriz</p>
    <p>Unopar</p>
    <div style="margin: 24px 0;">
      <a href="https://www.instagram.com/diegoernanisa/"><i class="fa fa-instagram"></i></a> 
      <a href="https://twitter.com/diegoernanisa"><i class="fa fa-twitter"></i></a>  
      <a href="https://www.linkedin.com/in/diegoernani"><i class="fa fa-linkedin"></i></a>  
      <a href="https://www.facebook.com/diegoernanisa"><i class="fa fa-facebook"></i></a> 
    </div>
    <p>
    <a href="https://diegoernani.pro"><button>Contato</button></a></p>
  </div>
  
  </body>
  </html>`
)
});

server.get('/contato', (req, res) => {
  res.send(
    `
    <!DOCTYPE HTML>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>HTML e CSS para Formulários: Sugestões</title>
      <link href="base.css" rel="stylesheet">
      <style>
        h1 {
          margin-bottom: 1rem;
        }
    
        * {
          margin: 0;
          padding: 0;
        }
    
        fieldset {
          border: 0;
        }
    
        body, input, select, textarea, button {
          font-family: sans-serif;
          font-size: 1em;
        }
        
        .grupo:before, .grupo:after {
          content: " ";
          display: table;
        }
        
        .grupo:after {
          clear: both;
        }
    
        .campo {
          margin-bottom: 1em;
        }
    
        .campo label {
          margin-bottom: 0.2em;
          color: #666;
          display: block;
        }
    
        fieldset.grupo .campo {
          float:  left;
          margin-right: 1em;
        }
    
        .campo input[type="text"],
        .campo input[type="email"],
        .campo input[type="url"],
        .campo input[type="tel"],
        .campo select,
        .campo textarea {
          padding: 0.2em;
          border: 1px solid #CCC;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
          display: block;
        }
    
        .campo select option {
          padding-right: 1em;
        }
    
        .campo input:focus, .campo select:focus, .campo textarea:focus {
          background: #FFC;
        }
    
        .campo label.checkbox {
          color: #000;
          display: inline-block;
          margin-right: 1em;
        }
    
        .botao {
          font-size: 1.5em;
          background: #F90;
          border: 0;
          margin-bottom: 1em;
          color: #FFF;
          padding: 0.2em 0.6em;
          box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
          text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
        }
    
        .botao:hover {
          background: #FB0;
          box-shadow: inset 2px 2px 2px rgba(0,0,0,0.2);
          text-shadow: none;
        }
    
        .botao, select, label.checkbox {
          cursor: pointer;
        }
      </style>
    </head>
    <body>
    
    <h1>Formulário Teste</h1>
    
    <form action="#" method="post">
    <fieldset>
      
      <fieldset class="grupo">
        <div class="campo">
          <label for="nome">Nome</label>
          <input type="text" id="nome" name="nome" style="width: 20em" value="" />
        </div>
        <div class="campo">
          <label for="snome">Sobrenome</label>
          <input type="text" id="snome" name="snome" style="width: 20em" value="" />
        </div>
      </fieldset>	
      
      <div class="campo">
        <label>Sexo</label>
        <label class="checkbox">
          <input type="radio" name="sexo" value="masculino"> Masculino
        </label>
        <label class="checkbox">
          <input type="radio" name="sexo" value="feminino"> Feminino
        </label>
      </div>
    
      <div class="campo">
        <label for="email">E-mail</label>
        <input type="text" id="email" name="email" style="width: 41em" value="" />
      </div>
    
      <div class="campo">
        <label for="telefone">Telefone</label>
        <input type="text" id="telefone" name="telefone" style="width: 20em"  value="" />
      </div>
      
      <fieldset class="grupo">
        <div class="campo">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" style="width: 20em" value="" />
        </div>
        <div class="campo">
          <label for="estado">Estado</label>
          <select name="estado" id="estado">
            <option value="">--</option>
            <option value="PR">PR</option>
          </select>
        </div>
      </fieldset>
    
      <div class="campo">
        <label for="mensagem">Mensagem</label>
        <textarea rows="6" style="width: 41em" id="mensagem" name="mensagem"></textarea>
      </div>
    
      <div class="campo">
        <label>Newsletter</label>
        <label class="checkbox">
          <input type="checkbox" name="newsletter" value="1"> Gostaria de receber a Newsletter da empresa
        </label>
      </div>
      
      <button class="botao submit" type="submit" name="submit">Enviar</button>
      
    </fieldset>
    </form>
    
    </body>
    </html>`
  )
});



server.listen(3001, () => {
  console.log('Servidor encontrado.');
});
