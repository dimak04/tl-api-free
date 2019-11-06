import db from "../models";
class AgreementsService {
  static async getAllAgreements() {
    try {
      return await db.agreement.findAll({
        attributes: [
          "id",
          "number",
          "dateStart",
          "dateEnd",
          "delay",
          "typeId",
          "providerId",
          "customerId",
          "typeOfDeliveryId"
        ]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addAgreement(newAgreement) {
    try {
      return await db.agreement.create(newAgreement);
    } catch (error) {
      throw error;
    }
  }

  static async updateAgreement(id, updateAgreement) {
    try {
      const agreementToUpdate = await db.agreement.findOne({
        where: { id: Number(id) }
      });

      if (agreementToUpdate) {
        await db.agreement.update(updateAgreement, {
          where: { id: Number(id) }
        });

        return updateAgreement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAgreement(id) {
    try {
      const theAgreement = await db.agreement.findOne({
        where: { id: Number(id) },
        attributes: [
          "id",
          "number",
          "dateStart",
          "dateEnd",
          "delay",
          "typeId",
          "providerId",
          "customerId",
          "typeOfDeliveryId"
        ]
      });

      return theAgreement;
    } catch (error) {
      throw error;
    }
  }

  static async deleteAgreement(id) {
    try {
      const agreementToDelete = await db.agreement.findOne({
        where: { id: Number(id) }
      });

      if (agreementToDelete) {
        const deletedAgreement = await db.agreement.destroy({
          where: { id: Number(id) }
        });
        return deletedAgreement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default AgreementsService;
