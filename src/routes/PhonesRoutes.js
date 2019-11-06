import { Router } from 'express';
import PhonesController from '../controllers/PhonesController';

const router = Router();

router.get('/', PhonesController.getAllPhones);
router.post('/', PhonesController.addPhone);
router.get('/:id', PhonesController.getPhone);
router.put('/:id', PhonesController.updatedPhone);
router.patch('/:id', PhonesController.updatedPhone);
router.delete('/:id', PhonesController.deletePhone);

export default router;