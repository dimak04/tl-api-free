import PhonesService from '../services/PhonesService';
import Util from '../utils/Utils';

const util = new Util();

class PhonesController {
  static async getAllPhones(req, res) {
    try {
      const allPhones = await PhonesService.getAllPhones();

      if (allPhones.length > 0) {
        util.setSuccess(200, 'Phones retrieved', allPhones);
      } else {
        util.setSuccess(200, 'No Phone found');
      }
      return util.send(res);
    } catch (error) {

      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addPhone(req, res) {
    if (!req.body.number || !req.body.contactId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newPhone = req.body;
    try {
      const createdPhone = await PhonesService.addPhone(newPhone);
      util.setSuccess(201, 'Phone Added!', createdPhone);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedPhone(req, res) {
    const alteredPhone = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updatePhone = await PhonesService.updatePhone(id, alteredPhone);
      if (!updatePhone) {
        util.setError(404, `Phone find Contact with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Phone updated', updatePhone);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getPhone(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const thePhone = await PhonesService.getPhone(id);

      if (!thePhone) {
        util.setError(404, `Phone find Contact with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Phone', thePhone);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deletePhone(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const phoneToDelete = await PhonesService.deletePhone(id);

      if (phoneToDelete) {
        util.setSuccess(200, 'Phone deleted', {id: id});
      } else {
        util.setError(404, `Phone with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default PhonesController;