import { Router } from 'express';
import AgreementsController from '../controllers/AgreementsController';

const router = Router();

router.get('/', AgreementsController.getAllAgreements);
router.post('/', AgreementsController.addAgreement);
router.get('/:id', AgreementsController.getAgreement);
router.put('/:id', AgreementsController.updatedAgreement);
router.delete('/:id', AgreementsController.deleteAgreement);

export default router;