import db from "../models";
const { contact, organization, phone, position } = db;
class ContactsService {
  static async getAllContacts() {
    try {
      return await contact.findAll({
        attributes: ["id", "fio", "email", "organizationId", "positionId"]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addContact(newContact) {
    try {
      const addedContact = await contact.create(newContact);
      return addedContact;
    } catch (error) {
      throw error;
    }
  }

  static async updateContact(id, updateContact) {
    try {
      const contactToUpdate = await contact.findOne({
        where: { id: Number(id) }
      });
      if (contactToUpdate) {
        await contact.update(updateContact, {
          where: { id: Number(id) }
        });
        return this.getContact(id);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getContact(id) {
    try {
      const theContact = await contact.findOne({
        where: { id: Number(id) },
        attributes: ["id", "fio", "email", "organizationId", "positionId"]
      });

      return theContact;
    } catch (error) {
      throw error;
    }
  }

  static async deleteContact(id) {
    try {
      const contactToDelete = await contact.findOne({
        where: { id: Number(id) }
      });

      if (contactToDelete) {
        const deletedContact = await contact.destroy({
          where: { id: Number(id) }
        });
        return deletedContact;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ContactsService;
