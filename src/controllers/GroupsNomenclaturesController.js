import GroupsNomenclaturesService from '../services/GroupsNomenclaturesService';
import Util from '../utils/Utils';

const util = new Util();

class GroupsNomenclaturesController {
  static async getAllGroupsNomenclatures(req, res) {
    try {
      const allGroupsNomenclatures = await GroupsNomenclaturesService.getAllGroupsNomenclatures();
      if (allGroupsNomenclatures.length > 0) {
        util.setSuccess(200, 'Groups Nomenclatures retrieved', allGroupsNomenclatures);
      } else {
        util.setSuccess(200, 'No Groups Nomenclatures found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addGroupNomenclature(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newGroupNomenclature = req.body;
    try {
      const createdGroupNomenclature = await GroupsNomenclaturesService.addGroupNomenclature(newGroupNomenclature);
      util.setSuccess(201, 'Group Nomenclature Added!', createdGroupNomenclature);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedGroupNomenclature(req, res) {
    const alteredGroupNomenclature = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateGroupNomenclature = await GroupsNomenclaturesService.updateGroupNomenclature(id, alteredGroupNomenclature);
      if (!updateGroupNomenclature) {
        util.setError(404, `Cannot find Group Nomenclature with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Group Nomenclature updated', updateGroupNomenclature);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getGroupNomenclature(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theGroupNomenclature = await GroupsNomenclaturesService.getGroupNomenclature(id);

      if (!theGroupNomenclature) {
        util.setError(404, `Cannot find Group Nomenclature with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Found Group Nomenclature', theGroupNomenclature);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteGroupNomenclature(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const groupNomenclatureToDelete = await GroupsNomenclaturesService.deleteGroupNomenclature(id);

      if (groupNomenclatureToDelete) {
        util.setSuccess(200, 'Group Nomenclature deleted', {id: id});
      } else {
        util.setError(404, `Group Nomenclature with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default GroupsNomenclaturesController;