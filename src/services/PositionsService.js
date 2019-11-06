import db from "../models";


class PositionsService {
  static async getAllPositions() {
    try {
      return await db.position.findAll({
        attributes: ["id", "name"]
      });
    } catch (error) {
      throw error;
    }
  }

  static async addPosition(newPosition) {
    try {
      return await db.position.create(newPosition);
    } catch (error) {
      throw error;
    }
  }

  static async updatePosition(id, updatePosition) {
    try {
      const positionToUpdate = await db.position.findOne({
        where: { id: Number(id) }
      });

      if (positionToUpdate) {
        await db.position.update(updatePosition, { where: { id: Number(id) } });

        return updatePosition;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getPosition(id) {
    try {
      const thePosition = await db.position.findOne({
        where: { id: Number(id) },
        attributes: ["id", "name"]
      });

      return thePosition;
    } catch (error) {
      throw error;
    }
  }

  static async deletePosition(id) {
    try {
      const positionToDelete = await db.position.findOne({ where: { id: Number(id) } });

      if (positionToDelete) {
        const deletedPosition = await db.position.destroy({
          where: { id: Number(id) }
        });
        return deletedPosition;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

}

export default PositionsService;