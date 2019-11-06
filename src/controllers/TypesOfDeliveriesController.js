import TypesOfDeliveriesService from '../services/TypesOfDeliveriesService';
import Util from '../utils/Utils';

const util = new Util();

class TypesOfDeliveriesController {
  static async getAllTypesOfDeliveries(req, res) {
    try {
      const allTypesOfDeliveries = await TypesOfDeliveriesService.getAllTypesOfDeliveries();
      if (allTypesOfDeliveries.length > 0) {
        util.setSuccess(200, 'Type of Deliveries retrieved', allTypesOfDeliveries);
      } else {
        util.setSuccess(200, 'No Type Of Deliveries found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addTypeOfDelivery(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newTypeOfDelivery = req.body;
    try {
      const createdTypeOfDelivery = await TypesOfDeliveriesService.addTypeOfDelivery(newTypeOfDelivery);
      util.setSuccess(201, 'Type of Delivery Added!', createdTypeOfDelivery);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedTypeOfDelivery(req, res) {
    const alteredTypeOfDelivery = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateTypeOfDelivery = await TypesOfDeliveriesService.updateTypeOfDelivery(id, alteredTypeOfDelivery);
      if (!updateTypeOfDelivery) {
        util.setError(404, `Cannot find typ of Delivery with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Type of Delivery updated', updateTypeOfDelivery);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getTypeOfDelivery(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theTypeOfDelivery = await TypesOfDeliveriesService.getTypeOfDelivery(id);

      if (!theTypeOfDelivery) {
        util.setError(404, `Cannot find typ of Delivery with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Found typ of Delivery', theTypeOfDelivery);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteTypeOfDelivery(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const typeOfDeliveryToDelete = await TypesOfDeliveriesService.deleteTypeOfDelivery(id);

      if (typeOfDeliveryToDelete) {
        util.setSuccess(200, 'Typ of Delivery deleted', {id: id});
      } else {
        util.setError(404, `Typ of Delivery with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default TypesOfDeliveriesController;