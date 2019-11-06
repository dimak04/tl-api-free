import db from "../models";

class GroupsNomenclaturesService {
  static async getAllGroupsNomenclatures() {
    try {
      return await db.groupNomenclature.findAll({attributes: ["id", "name"]});
    } catch (error) {
      throw error;
    }
  }

  static async addGroupNomenclature(newGroupNomenclature) {
    try {
      return await db.groupNomenclature.create(newGroupNomenclature);
    } catch (error) {
      throw error;
    }
  }

  static async updateGroupNomenclature(id, updateGroupNomenclature) {
    try {
      const groupNomenclatureToUpdate = await db.groupNomenclature.findOne({
        where: { id: Number(id) }
      });

      if (groupNomenclatureToUpdate) {
        await db.groupNomenclature.update(updateGroupNomenclature, {
          where: {id: Number(id)}
        });
        return db.groupNomenclature.findOne({where: {id: Number(id)}});
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getGroupNomenclature(id) {
    try {
      const theGroupNomenclature = await db.groupNomenclature.findOne({
        where: { id: Number(id) },
      attributes: ["id", "name"]
      });

      return theGroupNomenclature;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGroupNomenclature(id) {
    try {
      const groupNomenclatureToDelete = await db.groupNomenclature.findOne({
        where: { id: Number(id) }
      });

      if (groupNomenclatureToDelete) {
        const deletedGroupNomenclature = await db.groupNomenclature.destroy({
          where: { id: Number(id) }
        });
        return deletedGroupNomenclature;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default GroupsNomenclaturesService;
