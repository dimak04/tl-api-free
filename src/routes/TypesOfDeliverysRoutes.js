import { Router } from 'express';
import TypesOfDeliveriesController from '../controllers/TypesOfDeliveriesController';

const router = Router();

router.get('/', TypesOfDeliveriesController.getAllTypesOfDeliveries);
router.post('/', TypesOfDeliveriesController.addTypeOfDelivery);
router.get('/:id', TypesOfDeliveriesController.getTypeOfDelivery);
router.put('/:id', TypesOfDeliveriesController.updatedTypeOfDelivery);
router.patch('/:id', TypesOfDeliveriesController.updatedTypeOfDelivery);
router.delete('/:id', TypesOfDeliveriesController.deleteTypeOfDelivery);

export default router;