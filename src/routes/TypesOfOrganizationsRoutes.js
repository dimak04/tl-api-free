import { Router } from 'express';
import TypOfOrganizationController from '../controllers/TypesOfOrganizationsController';

const router = Router();

router.get('/', TypOfOrganizationController.getAllTypesOfOrganizations);
router.post('/', TypOfOrganizationController.addTypeOfOrganization);
router.get('/:id', TypOfOrganizationController.getTypeOfOrganization);
router.put('/:id', TypOfOrganizationController.updatedTypeOfOrganization);
router.patch('/:id', TypOfOrganizationController.updatedTypeOfOrganization);
router.delete('/:id', TypOfOrganizationController.deleteTypeOfOrganization);

export default router;