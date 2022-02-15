import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './rotas/index';
import dotenv from 'dotenv'; //usando variaveis de ambiente

dotenv.config(); //configurando porta dentro do arquivo .env 

const server = express();

server.set('view engine', 'mustache');
server.set('view', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname,'../public')));

//Rotas

server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Pagina nao encontrada!');
})

server.listen(process.env.PORT);

console.log(process.env.PORT);
console.log("O servidor sesta atvo na porta 3000");
