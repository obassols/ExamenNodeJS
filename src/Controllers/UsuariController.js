const usuariService = require("../Services/UsuariService");
const crypto = require('crypto');

const getAllUsuaris = (async (req, res) => {
  try {
    const allUsuaris = await usuariService.getAllUsuaris();
    res.status(200).send({ status: "OK", data: allUsuaris });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const createNewUsuari = (async (req, res) => {
  const { body } = req;

  if (
    !body.username ||
    !body.fullName
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "Falta un dels seguents parametres: 'username', 'fullName'",
        },
      });
    return;
  }

  const newUsuari = {
    id: crypto.randomUUID(),
    username: body.username,
    fullName: body.fullName,
    createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdUsuari = await usuariService.createNewUsuari(newUsuari);
    res.status(201).send({ status: "OK", data: createdUsuari });
  } catch (error) {
    res.status(error.status).send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const deleteOneUsuari = (async (req, res) => {
  const {
    params: { idUsuari },
  } = req;

  console.log(idUsuari);

  if (!idUsuari) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idUsuari'" },
      });
    return;
  }

  try {
    const deletedUsuari = await usuariService.deleteOneUsuari(idUsuari);
    res.status(200).send({ status: "OK", data: deletedUsuari });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const getUsuariTasques = (async (req, res) => {
  const {
    params: { idUsuari },
  } = req;

  if (!idUsuari) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idUsuari'" },
      });
    return;
  }

  try {
    let tasques = await usuariService.getUsuariTasques(idUsuari);

    if (req.query.estat) {
      tasques = tasques.filter(tasca => tasca.status === req.query.estat);
    }

    if (req.query.data) {
      tasques = tasques.filter(tasca => tasca.createdAt > req.query.data);
    }

    res.status(200).send({ status: "OK", data: tasques });

  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

module.exports = {
  getAllUsuaris,
  createNewUsuari,
  deleteOneUsuari,
  getUsuariTasques,
};