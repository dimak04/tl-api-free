import db from "../models";

class TypeOfOrganizationService {
  static async getAllTypesOfOrganizations() {
    try {
      return await db.typeOfOrganization.findAll({
        attributes: ["id", "name"]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addTypeOfOrganization(newTypeOfOrganization) {
    try {
      return await db.typeOfOrganization.create(newTypeOfOrganization);
    } catch (error) {
      throw error;
    }
  }

  static async updateTypeOfOrganization(id, updateTypeOfOrganization) {
    try {
      const typeOfOrganizationToUpdate = await db.typeOfOrganization.findOne({
        where: { id: Number(id) }
      });

      if (typeOfOrganizationToUpdate) {
        await db.typeOfOrganization.update(updateTypeOfOrganization, {
          where: { id: Number(id) }
        });

        return updateTypeOfOrganization;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getTypeOfOrganization(id) {
    try {
      const theTypeOfOrganization = await db.typeOfOrganization.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name"]
      });

      return theTypeOfOrganization;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTypeOfOrganization(id) {
    try {
      const typeOfOrganizationToDelete = await db.typeOfOrganization.findOne({
        where: { id: Number(id) }
      });

      if (typeOfOrganizationToDelete) {
        const deletedTypeOfOrganization = await db.typeOfOrganization.destroy({
          where: { id: Number(id) }
        });
        return deletedTypeOfOrganization;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TypeOfOrganizationService;
