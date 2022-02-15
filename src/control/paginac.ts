import {Request, Response} from 'express';

export const home = (req: Request, res:Response) =>{
        // res.render('pages/pages');
        res.send('Homes');
}

export const dogs = (req: Request, res:Response) =>{
    res.send('dogs');
    // res.render('pages/pages');
}

export const cats = (req: Request, res:Response) =>{
    res.send('cats');
    // res.render('pages/pages');
}

export const fishes = (req: Request, res:Response) =>{
    res.send('fishes');
    // res.render('pages/pages');
}