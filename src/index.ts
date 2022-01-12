import express, {Request, Response, NextFunction, json} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

/* 
    configuração responsável por informar 
    a aplicação que o contentType das requisições é em formato Json
*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração das rotas
app.use(statusRoute);
app.use(usersRoute);

//inicialização do servidor
app.listen(3000, () => {
    console.log("aplicação sendo executada na porta 3000")
})