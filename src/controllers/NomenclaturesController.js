import NomenclaturesService from '../services/NomenclaturesService';
import Util from '../utils/Utils';

const util = new Util();

class NomenclaturesController {
  static async getAllNomenclatures(req, res) {
    try {

      const allNomenclatures = await NomenclaturesService.getAllNomenclatures();

      if (allNomenclatures.length > 0) {
        util.setSuccess(200, 'Nomenclatures retrieved', allNomenclatures);
      } else {
        util.setSuccess(200, 'No Nomenclatures found');
      }
      return util.send(res);
    } catch (error) {

      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addNomenclature(req, res) {
    if (!req.body.name || !req.body.groupId) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newNomenclature = req.body;
    try {
      const createdNomenclature = await NomenclaturesService.addNomenclature(newNomenclature);
      util.setSuccess(201, 'Nomenclature Added!', createdNomenclature);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedNomenclature(req, res) {
    const alteredNomenclature = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateNomenclature = await NomenclaturesService.updateNomenclature(id, alteredNomenclature);
      if (!updateNomenclature) {
        util.setError(404, `Cannot find Nomenclature with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Nomenclature updated', updateNomenclature);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getNomenclature(req, res) {
    const { id } = req.params;

    if (!Number(id)) {

      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {

      const theNomenclature = await NomenclaturesService.getNomenclature(id);

      if (!theNomenclature) {
        util.setError(404, `Cannot find Nomenclature with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Nomenclature', theNomenclature);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteNomenclature(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const nomenclatureToDelete = await NomenclaturesService.deleteNomenclature(id);

      if (nomenclatureToDelete) {
        util.setSuccess(200, 'Nomenclature deleted', {id: id});
      } else {
        util.setError(404, `Nomenclature with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default NomenclaturesController;