import db from "../models";
class PhonesService {
  static async getAllPhones() {
    try {
      return await db.phone.findAll({
        attributes: ["id", "number", "contactId"]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addPhone(newPhone) {
    try {
      return await db.phone.create(newPhone);
    } catch (error) {
      throw error;
    }
  }

  static async updatePhone(id, updatePhone) {
    try {
      const phoneToUpdate = await db.phone.findOne({
        where: { id: Number(id) }
      });

      if (phoneToUpdate) {
        await db.phone.update(updatePhone, {
          where: { id: Number(id) }
        });

        return updatePhone;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getPhone(id) {
    try {
      const thePhone = await db.phone.findOne({
        where: { id: Number(id) },
        attributes: ["id", "number", "contactId"]
      });

      return thePhone;
    } catch (error) {
      throw error;
    }
  }

  static async deletePhone(id) {
    try {
      const phoneToDelete = await db.phone.findOne({
        where: { id: Number(id) }
      });

      if (phoneToDelete) {
        const deletedPhone = await db.phone.destroy({
          where: { id: Number(id) }
        });
        return deletedPhone;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default PhonesService;
