import {Router} from 'express';
import * as PaginasC from '../control/paginac';
import * as ProcuraC from '../control/procurac';

const router = Router();

//configurando as rotas

router.get('/', PaginasC.home);
router.get('/dogs', PaginasC.dogs);
router.get('/cats', PaginasC.cats);
router.get('/fishes', PaginasC.fishes);

router.get('/Procura', ProcuraC.procura);


export default router;