import TypeOfOrganizationService from '../services/TypeOfOrganizationService';
import Util from '../utils/Utils';

const util = new Util();

class TypeOfOrganizationController {
  static async getAllTypesOfOrganizations(req, res) {
    try {
      const allTypesOfOrganizations = await TypeOfOrganizationService.getAllTypesOfOrganizations();
      if (allTypesOfOrganizations.length > 0) {
        util.setSuccess(200, 'Type of organizations retrieved', allTypesOfOrganizations);
      } else {
        util.setSuccess(200, 'No Organization found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTypeOfOrganization(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTypeOfOrganization = req.body;
    try {
      const createdTypeOfOrganization = await TypeOfOrganizationService.addTypeOfOrganization(newTypeOfOrganization);
      util.setSuccess(201, 'Type of organization Added!', createdTypeOfOrganization);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTypeOfOrganization(req, res) {
    const alteredTypeOfOrganization = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTypeOfOrganization = await TypeOfOrganizationService.updateTypeOfOrganization(id, alteredTypeOfOrganization);
      if (!updateTypeOfOrganization) {
        util.setError(404, `Cannot find typ of organization with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Type of organization updated', updateTypeOfOrganization);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getTypeOfOrganization(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTypeOfOrganization = await TypeOfOrganizationService.getTypeOfOrganization(id);

      if (!theTypeOfOrganization) {
        util.setError(404, `Cannot find typ of organization with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Found typ of organization', theTypeOfOrganization);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteTypeOfOrganization(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const typeOfOrganizationToDelete = await TypeOfOrganizationService.deleteTypeOfOrganization(id);

      if (typeOfOrganizationToDelete) {
        util.setSuccess(200, 'Typ of organization deleted', {id: id});
      } else {
        util.setError(404, `Typ of organization with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default TypeOfOrganizationController;