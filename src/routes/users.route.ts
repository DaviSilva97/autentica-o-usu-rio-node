import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from "http-status-codes";

const usersRoute = Router();

usersRoute.get('/users', (req: Request , res: Response, next: NextFunction) =>{
    const users = [{userName: "Davi"}];
    res.status(StatusCodes.OK).send({users});
});

//exemplo de utilização de parâmetros
usersRoute.get('/users/:uuid', (req: Request<{uuid: string}> , res: Response, next: NextFunction) =>{
    /*
        Request<{ uuid: string }> -  informar que espera um parâmetro do tipo string. 
        Dessa forma o auto complete funciona para req.params
    */    
    
    //pegar parâmetro da requisição
    const uuid = req.params.uuid;

    res.status(200).send({uuid});
});

usersRoute.post('/users', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send({newUser});
});

usersRoute.put('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) =>{
    const modifiedUser = req.body;
    modifiedUser.uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({modifiedUser})
});

usersRoute.delete('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
})


export default usersRoute;