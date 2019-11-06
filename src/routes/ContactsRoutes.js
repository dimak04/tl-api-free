import { Router } from 'express';
import ContactsController from '../controllers/ContactsController';

const router = Router();

router.get('/', ContactsController.getAllContacts);
router.post('/', ContactsController.addContact);
router.get('/:id', ContactsController.getContact);
router.put('/:id', ContactsController.updatedContact);
router.patch('/:id', ContactsController.updatedContact);
router.delete('/:id', ContactsController.deleteContact);

export default router;