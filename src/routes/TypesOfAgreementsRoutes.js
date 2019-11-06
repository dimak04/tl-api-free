import { Router } from 'express';
import TypesOfAgreementsController from '../controllers/TypesOfAgreementsController';

const router = Router();

router.get('/', TypesOfAgreementsController.getAllTypesOfAgreements);
router.post('/', TypesOfAgreementsController.addTypeOfAgreement);
router.get('/:id', TypesOfAgreementsController.getTypeOfAgreement);
router.put('/:id', TypesOfAgreementsController.updatedTypeOfAgreement);
router.patch('/:id', TypesOfAgreementsController.updatedTypeOfAgreement);
router.delete('/:id', TypesOfAgreementsController.deleteTypeOfAgreement);

export default router;