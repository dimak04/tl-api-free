import { Router } from 'express';
import OrganizationsController from '../controllers/OrganizationsController';

const router = Router();

router.get('/', OrganizationsController.getAllOrganizations);
router.post('/', OrganizationsController.addOrganization);
router.get('/:id', OrganizationsController.getOrganization);
router.put('/:id', OrganizationsController.updatedOrganization);
router.patch('/:id', OrganizationsController.updatedOrganization);
router.delete('/:id', OrganizationsController.deleteOrganization);

export default router;