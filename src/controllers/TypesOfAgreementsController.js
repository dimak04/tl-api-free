import TypesOfAgreementsService from '../services/TypesOfAgreementsService';
import Util from '../utils/Utils';

const util = new Util();

class TypesOfAgreementsController {
  static async getAllTypesOfAgreements(req, res) {
    try {
      const allTypesOfAgreements = await TypesOfAgreementsService.getAllTypesOfAgreements();
      if (allTypesOfAgreements.length > 0) {
        util.setSuccess(200, 'Type of Agreements retrieved', allTypesOfAgreements);
      } else {
        util.setSuccess(200, 'No Type Of Agreement found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTypeOfAgreement(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTypeOfAgreement = req.body;
    try {
      const createdTypeOfAgreement = await TypesOfAgreementsService.addTypeOfAgreement(newTypeOfAgreement);
      util.setSuccess(201, 'Type of Agreement Added!', createdTypeOfAgreement);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTypeOfAgreement(req, res) {
    const alteredTypeOfAgreement = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTypeOfAgreement = await TypesOfAgreementsService.updateTypeOfAgreement(id, alteredTypeOfAgreement);
      if (!updateTypeOfAgreement) {
        util.setError(404, `Cannot find typ of Agreement with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Type of Agreement updated', updateTypeOfAgreement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getTypeOfAgreement(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTypeOfAgreement = await TypesOfAgreementsService.getTypeOfAgreement(id);

      if (!theTypeOfAgreement) {
        util.setError(404, `Cannot find typ of Agreement with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Found typ of Agreement', theTypeOfAgreement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteTypeOfAgreement(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const typeOfAgreementToDelete = await TypesOfAgreementsService.deleteTypeOfAgreement(id);

      if (typeOfAgreementToDelete) {
        util.setSuccess(200, 'Typ of Agreement deleted', {id: id});
      } else {
        util.setError(404, `Typ of Agreement with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default TypesOfAgreementsController;