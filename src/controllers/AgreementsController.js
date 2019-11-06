import AgreementsService from "../services/AgreementsService";
import Util from "../utils/Utils";

const util = new Util();

class AgreementsController {
  static async getAllAgreements(req, res) {
    try {
      const allAgreements = await AgreementsService.getAllAgreements();

      if (allAgreements.length > 0) {
        util.setSuccess(200, "Agreements retrieved", allAgreements);
      } else {
        util.setSuccess(200, "No Agreement found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addAgreement(req, res) {
    if (
      !req.body.number ||
      !req.body.typeId ||
      !req.body.dateStart ||
      !req.body.providerId ||
      !req.body.customerId
    ) {
      util.setError(400, "Please Agreement complete details");
      return util.send(res);
    }
    const newAgreement = req.body;
    try {
      const createdAgreement = await AgreementsService.addAgreement(
        newAgreement
      );
      util.setSuccess(201, "Agreement Added!", createdAgreement);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedAgreement(req, res) {
    const alteredAgreement = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateAgreement = await AgreementsService.updateAgreement(
        id,
        alteredAgreement
      );
      if (!updateAgreement) {
        util.setError(404, `Cannot find Agreement with the id: ${id}`);
      } else {
        util.setSuccess(200, "Agreement updated", updateAgreement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAgreement(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theAgreement = await AgreementsService.getAgreement(id);

      if (!theAgreement) {
        util.setError(404, `Cannot find Agreement with the id ${id}`);
      } else {
        util.setSuccess(200, "Found Agreement", theAgreement);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteAgreement(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please Agreement a numeric value");
      return util.send(res);
    }

    try {
      const agreementToDelete = await AgreementsService.deleteAgreement(id);

      if (agreementToDelete) {
        util.setSuccess(200, "Agreement deleted", {id: id});
      } else {
        util.setError(404, `Agreement with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default AgreementsController;
