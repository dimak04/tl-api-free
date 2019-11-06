import db from "../models";

class TypesOfAgreementsService {
  static async getAllTypesOfAgreements() {
    try {
      return await db.typeOfAgreement.findAll({ attributes: ["id", "name"] });
    } catch (error) {
      throw error;
    }
  }

  static async addTypeOfAgreement(newTypeOfAgreement) {
    try {
      return await db.typeOfAgreement.create(newTypeOfAgreement);
    } catch (error) {
      throw error;
    }
  }

  static async updateTypeOfAgreement(id, updateTypeOfAgreement) {
    try {
      const typeOfAgreementToUpdate = await db.typeOfAgreement.findOne({
        where: { id: Number(id) }
      });

      if (typeOfAgreementToUpdate) {
        await db.typeOfAgreement.update(updateTypeOfAgreement, {
          where: { id: Number(id) }
        });

        return updateTypeOfAgreement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getTypeOfAgreement(id) {
    try {
      const theTypeOfAgreement = await db.typeOfAgreement.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name"]
      });

      return theTypeOfAgreement;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTypeOfAgreement(id) {
    try {
      const typeOfAgreementToDelete = await db.typeOfAgreement.findOne({
        where: { id: Number(id) }
      });

      if (typeOfAgreementToDelete) {
        const deletedTypeOfAgreement = await db.typeOfAgreement.destroy({
          where: { id: Number(id) }
        });
        return deletedTypeOfAgreement;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TypesOfAgreementsService;
