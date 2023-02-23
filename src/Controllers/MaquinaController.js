const maquinaService = require("../Services/MaquinaService");

const getAllMaquines = (async (req, res) => {
  try {
    const allMaquines = await maquinaService.getAllMaquines();
    res.status(200).send({ status: "OK", data: allMaquines });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const getOneMaquina = (async (req, res) => {
  const {
    params: { idMaquina },
  } = req;

  if (!idMaquina) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idMaquina'" },
      });
    return;
  }

  try {
    const maquina = await maquinaService.getOneMaquina(idMaquina);
    res.status(200).send({ status: "OK", data: maquina });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
});

const getMaquinaEstocs = (async (req, res) => {
  const {
    params: { idMaquina },
  } = req;
  
  if (!idMaquina) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idMaquina'" },
      });
    return;
  }

  if (req.query.disponible !== undefined) {
    try {
      const estocsDisponibles = await maquinaService.getMaquinaEstocsDisponibles(idMaquina);
      res.status(200).send({ status: "OK", data: estocsDisponibles });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  } else {
    try {
      const estocs = await maquinaService.getMaquinaEstocs(idMaquina);
      res.status(200).send({ status: "OK", data: estocs });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  }
});

const getMaquinaCalaixos = (async (req, res) => {
  const {
    params: { idMaquina },
  } = req;

  if (!idMaquina) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'idMaquina'" },
      });
    return;
  }
  
  if (req.query.buits !== undefined) {
    try {
      const calaixosBuits = await maquinaService.getMaquinaCalaixosBuits(idMaquina);
      res.status(200).send({ status: "OK", data: calaixosBuits });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  } else {
    try {
      const calaixos = await maquinaService.getMaquinaCalaixos(idMaquina);
      res.status(200).send({ status: "OK", data: calaixos });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  }
});

module.exports = {
  getAllMaquines,
  getOneMaquina,
  getMaquinaEstocs,
  getMaquinaCalaixos,
};