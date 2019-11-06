import PositionsService from '../services/PositionsService';
import Util from '../utils/Utils';

const util = new Util();

class PositionsController {
  static async getAllPositions(req, res) {
    try {
      const allPositions = await PositionsService.getAllPositions();
      if (allPositions.length > 0) {
        util.setSuccess(200, 'Positions retrieved', allPositions);
      } else {
        util.setSuccess(200, 'No Position found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addPosition(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newPosition = req.body;
    try {
      const createdPosition = await PositionsService.addPosition(newPosition);
      util.setSuccess(201, 'Position Added!', createdPosition);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedPosition(req, res) {
    const alteredPosition = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatePosition = await PositionsService.updatePosition(id, alteredPosition);
      if (!updatePosition) {
        util.setError(404, `Cannot find Position with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Position updated', updatePosition);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getPosition(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const thePosition = await PositionsService.getPosition(id);

      if (!thePosition) {
        util.setError(404, `Cannot find Position with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Found Position', thePosition);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletePosition(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const positionToDelete = await PositionsService.deletePosition(id);

      if (positionToDelete) {
        util.setSuccess(200, 'Position deleted', {id: id});
      } else {
        util.setError(404, `Position with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default PositionsController;