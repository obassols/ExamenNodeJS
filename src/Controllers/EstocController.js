const estocService = require("../Services/EstocService");
const crypto = require('crypto');

const getAllEstocs = (async (req, res) => {
  if (req.query.disponible !== undefined) {
    try {
      const allEstocsDisponibles = await estocService.getAllEstocsDisponibles();
      res.status(200).send({ status: "OK", data: allEstocsDisponibles });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  } else {
    if (req.query.venda) {
      try {
        const allEstocsVenda = await estocService.getAllEstocsVenda(req.query.venda);
        res.status(200).send({ status: "OK", data: allEstocsVenda });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
    } else {
      try {
        const allEstocs = await estocService.getAllEstocs();
        res.status(200).send({ status: "OK", data: allEstocs });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
    }
  }
});

const getOneEstoc = (async (req, res) => {
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
});

const createNewEstoc = (async (req, res) => {
  const { body } = req;

  if (
    !body.producte ||
    !body.caducitat ||
    !body.ubicacio
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "Falta un dels seguents parametres: 'producte', 'caducitat', 'ubicacio'",
        },
      });
    return;
  }

  const newEstoc = {
    id: crypto.randomUUID(),
    producte: body.producte,
    caducitat: body.caducitat,
    dataVenda: null,
    ubicacio: body.ubicacio
  };
  console.log(newEstoc);

  try {
    const createdEstoc = await estocService.createNewEstoc(newEstoc);
    res.status(201).send({ status: "OK", data: createdEstoc });
  } catch (error) {
    res.status(error.status).send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const updateOneEstoc = (async (req, res) => {
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
});

const deleteOneEstoc = (async (req, res) => {
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
    return;
  }

  try {
    const deletedProducte = await producteService.deleteOneEstoc(idEstoc);
    res.status(200).send({ status: "OK", data: deletedProducte });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

module.exports = {
  getAllEstocs,
  getOneEstoc,
  createNewEstoc,
  updateOneEstoc,
  deleteOneEstoc,
};