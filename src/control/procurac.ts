import {Request, Response} from 'express';
import {pet} from '../models/pet';
import {createMenu} from '../helpers/createMenu';


export const procura = (req: Request, res:Response) =>{
let query :string = req.query.q as string;

if(!query){
    res.redirect('/');
    return;
}


let lista = pet.getFromName(query);

    res.render('pages/pages', {
        menu:createMenu(''),
        lista,
        query
    });
}