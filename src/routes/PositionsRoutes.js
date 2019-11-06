import { Router } from 'express';
import PositionsController from '../controllers/PositionsController';

const router = Router();

router.get('/', PositionsController.getAllPositions);
router.post('/', PositionsController.addPosition);
router.get('/:id', PositionsController.getPosition);
router.put('/:id', PositionsController.updatedPosition);
router.patch('/:id', PositionsController.updatedPosition);
router.delete('/:id', PositionsController.deletePosition);

export default router;