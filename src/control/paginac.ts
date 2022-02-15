import { Request, Response } from 'express';
import { createMenu } from '../helpers/createMenu';
import {pet} from '../models/pet'


export const home = (req: Request, res: Response) => {
    let lista = pet.getAll();
    res.render('pages/pages', {
        menu: createMenu('all'),
        banner: {
            titulo: 'Todos os Animais',
            background: 'allanimals.jpg'
        },
        lista

    });
}

export const dogs = (req: Request, res: Response) => {
    let lista = pet.getFromType('dog');
    res.render('pages/pages', {
        menu: createMenu('dog'),
        banner: {
            titulo: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        lista
    });
}

export const cats = (req: Request, res: Response) => {
    let lista = pet.getFromType('cat');
    res.render('pages/pages', {
        menu: createMenu('cat'),
        banner: {
            titulo: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        lista
    });
}

export const fishes = (req: Request, res: Response) => {
    let lista = pet.getFromType('fish');
    res.render('pages/pages', {
        menu: createMenu('fish'),
        banner: {
            titulo: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        lista
    });
}