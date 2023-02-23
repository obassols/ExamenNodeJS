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

/* const getOneEstoc = (async (req, res) => {
  const {
    params: { idEstoc },
  } = req;

  if (!idEstoc) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idEstoc'" },
      });
    return;
  }

  try {
    const estoc = await estocService.getOneEstoc(idEstoc);
    res.status(200).send({ status: "OK", data: estoc });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}); */

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

/* const updateOneEstoc = (async (req, res) => {
  const {
    body,
    params: { idEstoc },
  } = req;

  if (!idEstoc) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idEstoc'" },
      });
  }

  try {
    const canvis = {
      producte: body.producte ? body.producte : null,
      caducitat: body.caducitat ? body.caducitat : null,
      dataVenda: body.dataVenda ? body.dataVenda : null,
      ubicacio: body.ubicacio ? body.ubicacio : null
    };
    await estocService.updateOneEstoc(idEstoc, canvis);
    const updatedEstoc = await estocService.getOneEstoc(idEstoc);
    res.status(200).send({ status: "OK", data: updatedEstoc });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}); */

const deleteOneUsuari = (async (req, res) => {
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
    const deletedUsuari = await producteService.deleteOneUsuari(idUsuari);
    res.status(200).send({ status: "OK", data: deletedUsuari });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

module.exports = {
  getAllUsuaris,
  // getOneEstoc,
  createNewUsuari,
  // updateOneEstoc,
  deleteOneUsuari,
};