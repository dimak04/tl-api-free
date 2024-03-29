import ContactsService from '../services/ContactsService';
import Util from '../utils/Utils';

const util = new Util();

class ContactsController {
  static async getAllContacts(req, res) {
    try {

      const allContacts = await ContactsService.getAllContacts();

      if (allContacts.length > 0) {
        util.setSuccess(200, 'Contacts retrieved', allContacts);
      } else {
        util.setSuccess(200, 'No Contact found');
      }
      return util.send(res);
    } catch (error) {

      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addContact(req, res) {
    if (!req.body.fio || !req.body.positionId ) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newContact = req.body;
    try {
      const createdContact = await ContactsService.addContact(newContact);
      util.setSuccess(201, 'Contact Added!', createdContact);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedContact(req, res) {
    const alteredContact = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateContact = await ContactsService.updateContact(id, alteredContact);
      if (!updateContact) {
        util.setError(404, `Cannot find Contact with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Contact updated', updateContact);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getContact(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theContact = await ContactsService.getContact(id);

      if (!theContact) {
        util.setError(404, `Cannot find Contact with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Contact', theContact);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteContact(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const contactToDelete = await ContactsService.deleteContact(id);

      if (contactToDelete) {
        util.setSuccess(200, 'Contact deleted', {id: id});
      } else {
        util.setError(404, `Contact with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ContactsController;