import db from "../models";
const { organization, nomenclature } = db;
class OrganizationsService {
  static async getAllOrganizations() {
    try {
      return await organization.findAll({
        attributes: [
          "id",
          "name",
          "fullName",
          "actualAddress",
          "legalAddress",
          "typeId"
        ],
        include: [
          {
            model: nomenclature,
            attributes: ["id", "name", "groupId"]
          }
        ]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addOrganization(newOrganization) {
    try {
      const {
        name,
        fullName,
        actualAddress,
        legalAddress,
        typeId
      } = newOrganization;
      const baseData = { name, fullName, actualAddress, legalAddress, typeId };
      return await organization.create(baseData).then(organization => {
        return this.getOrganization(organization.dataValues.id);
      });
    } catch (error) {
      throw error;
    }
  }

  static async updateOrganization(id, updateOrganization) {
    try {
      const organizationToUpdate = await organization.findOne({
        where: { id: Number(id) }
      });

      const {
        name,
        fullName,
        actualAddress,
        legalAddress,
        typeId,
        nomenclatures
      } = updateOrganization;
      const baseData = { name, fullName, actualAddress, legalAddress, typeId };
      const addedNomenclatures = nomenclatures.map(item => item.id);
      if (organizationToUpdate) {
        await organization.update(baseData, {
          where: { id: Number(id) }
        });
        await organizationToUpdate.setNomenclatures(addedNomenclatures);
        return updateOrganization;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getOrganization(id) {
    try {
      const theOrganization = await organization.findOne({
        where: { id: Number(id) },
        attributes: [
          "id",
          "name",
          "fullName",
          "actualAddress",
          "legalAddress",
          "typeId"
        ],
        include: [
          {
            model: nomenclature,
            attributes: ["id", "name", "groupId"]
          }
        ]
      });

      return theOrganization;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrganization(id) {
    try {
      const organizationToDelete = await organization.findOne({
        where: { id: Number(id) }
      });

      if (organizationToDelete) {
        const deletedOrganization = await organization.destroy({
          where: { id: Number(id) }
        });
        return deletedOrganization;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default OrganizationsService;
