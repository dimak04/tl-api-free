import OrganizationsService from '../services/OrganizationsService';
import Util from '../utils/Utils';

const util = new Util();

class OrganizationsController {
  static async getAllOrganizations(req, res) {
    try {

      const allOrganizations = await OrganizationsService.getAllOrganizations();

      if (allOrganizations.length > 0) {
        util.setSuccess(200, 'Organizations retrieved', allOrganizations);
      } else {
        util.setSuccess(200, 'No Organization found');
      }
      return util.send(res);
    } catch (error) {

      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addOrganization(req, res) {
    if (!req.body.name || !req.body.fullName || !req.body.legalAddress || !req.body.actualAddress) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newOrganization = req.body;
    try {
      const createdOrganization = await OrganizationsService.addOrganization(newOrganization);
      util.setSuccess(201, 'Organization Added!', createdOrganization);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedOrganization(req, res) {
    const alteredOrganization = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateOrganization = await OrganizationsService.updateOrganization(id, alteredOrganization);
      if (!updateOrganization) {
        util.setError(404, `Cannot find organization with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Organization updated', updateOrganization);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getOrganization(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theOrganization = await OrganizationsService.getOrganization(id);

      if (!theOrganization) {
        util.setError(404, `Cannot find book with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Book', theOrganization);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteOrganization(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const organizationToDelete = await OrganizationsService.deleteOrganization(id);

      if (organizationToDelete) {
        util.setSuccess(200, 'Organization deleted', {id: id});
      } else {
        util.setError(404, `Organization with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default OrganizationsController;