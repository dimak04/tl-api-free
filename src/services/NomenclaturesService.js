import db from "../models";
class NomenclaturesService {
  static async getAllNomenclatures() {
    try {
      return await db.nomenclature.findAll({
        attributes: ["id", "name", "groupId"]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addNomenclature(newNomenclature) {
    try {
      return await db.nomenclature.create(newNomenclature);
    } catch (error) {
      throw error;
    }
  }

  static async updateNomenclature(id, updateNomenclature) {
    try {
      const nomenclatureToUpdate = await db.nomenclature.findOne({
        where: { id: Number(id) }
      });

      if (nomenclatureToUpdate) {
        await db.nomenclature.update(updateNomenclature, {
          where: { id: Number(id) }
        });

        return updateNomenclature;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getNomenclature(id) {
    try {
      const group = db.groupNomenclature;
      const theNomenclature = await db.nomenclature.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name", "groupId"]
      });

      return theNomenclature;
    } catch (error) {
      throw error;
    }
  }

  static async deleteNomenclature(id) {
    try {
      const nomenclatureToDelete = await db.nomenclature.findOne({
        where: { id: Number(id) }
      });

      if (nomenclatureToDelete) {
        const deletedNomenclature = await db.nomenclature.destroy({
          where: { id: Number(id) }
        });
        return deletedNomenclature;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default NomenclaturesService;
