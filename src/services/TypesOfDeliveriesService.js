import db from "../models";

class TypesOfDeliveriesService {
  static async getAllTypesOfDeliveries() {
    try {
      return await db.typeOfDelivery.findAll({ attributes: ["id", "name"] });
    } catch (error) {
      throw error;
    }
  }

  static async addTypeOfDelivery(newTypeOfDelivery) {
    try {
      return await db.typeOfDelivery.create(newTypeOfDelivery);
    } catch (error) {
      throw error;
    }
  }

  static async updateTypeOfDelivery(id, updateTypeOfDelivery) {
    try {
      const typeOfDeliveryToUpdate = await db.typeOfDelivery.findOne({
        where: { id: Number(id) }
      });

      if (typeOfDeliveryToUpdate) {
        await db.typeOfDelivery.update(updateTypeOfDelivery, {
          where: { id: Number(id) }
        });

        return updateTypeOfDelivery;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getTypeOfDelivery(id) {
    try {
      const theTypeOfDelivery = await db.typeOfDelivery.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name"]
      });

      return theTypeOfDelivery;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTypeOfDelivery(id) {
    try {
      const typeOfDeliveryToDelete = await db.typeOfDelivery.findOne({
        where: { id: Number(id) }
      });

      if (typeOfDeliveryToDelete) {
        const deletedTypeOfDelivery = await db.typeOfDelivery.destroy({
          where: { id: Number(id) }
        });
        return deletedTypeOfDelivery;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default TypesOfDeliveriesService;
