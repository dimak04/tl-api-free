import { Router } from 'express';
import NomenclaturesController from '../controllers/NomenclaturesController';

const router = Router();

router.get('/', NomenclaturesController.getAllNomenclatures);
router.post('/', NomenclaturesController.addNomenclature);
router.get('/:id', NomenclaturesController.getNomenclature);
router.put('/:id', NomenclaturesController.updatedNomenclature);
router.patch('/:id', NomenclaturesController.updatedNomenclature);
router.delete('/:id', NomenclaturesController.deleteNomenclature);

export default router;