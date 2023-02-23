const tascaService = require("../Services/TascaService");
const crypto = require('crypto');

const getOneTasca = (async (req, res) => {
  const {
    params: { idTasca },
  } = req;

  if (!idTasca) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idTasca'" },
      });
    return;
  }

  try {
    const tasca = await tascaService.getOneTasca(idTasca);
    if (!tasca) {
      res.status(404).send({ status: "FAILED", data: { error: "Tasca no trobada" } });
      return;
    }
    res.status(200).send({ status: "OK", data: tasca });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const createNewTasca = (async (req, res) => {
  const { body } = req;
  
  if (
    !body.user ||
    !body.title ||
    !body.description ||
    !body.status
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "Falta un dels seguents parametres: 'user', 'title', 'description', 'status'",
        },
      });
    return;
  }

  const newTasca = {
    id: crypto.randomUUID(),
    user: body.user,
    title: body.title,
    description: body.description,
    status: body.status,
    createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
  };

  try {
    const tasca = await tascaService.createNewTasca(newTasca);
    res.status(200).send({ status: "OK", data: tasca });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const updateOneTasca = (async (req, res) => {
  const {
    params: { idTasca },
    body,
  } = req;

  if (!idTasca) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idTasca'" },
      });
    return;
  }

  try {
    const tasca = await tascaService.updateOneTasca(idTasca, body);
    res.status(200).send({ status: "OK", data: tasca });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const deleteOneTasca = (async (req, res) => {
  const {
    params: { idTasca },
  } = req;

  if (!idTasca) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idTasca'" },
      });
    return;
  }

  try {
    const tasca = await tascaService.deleteOneTasca(idTasca);
    res.status(200).send({ status: "OK", data: tasca });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

module.exports = {
  getOneTasca,
  createNewTasca,
  updateOneTasca,
  deleteOneTasca,
};