import { Router } from 'express';
import GroupsNomenclaturesController from '../controllers/GroupsNomenclaturesController';

const router = Router();

router.get('/', GroupsNomenclaturesController.getAllGroupsNomenclatures);
router.post('/', GroupsNomenclaturesController.addGroupNomenclature);
router.get('/:id', GroupsNomenclaturesController.getGroupNomenclature);
router.put('/:id', GroupsNomenclaturesController.updatedGroupNomenclature);
router.patch('/:id', GroupsNomenclaturesController.updatedGroupNomenclature);
router.delete('/:id', GroupsNomenclaturesController.deleteGroupNomenclature);

export default router;