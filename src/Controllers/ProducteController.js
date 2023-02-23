const producteService = require("../Services/ProducteService");

const getAllProductes = (async (req, res) => {
  try {
    const allProductes = await producteService.getAllProductes();
    res.status(200).send({ status: "OK", data: allProductes });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error }});
  }
});

const getOneProducte = (async (req, res) => {
  const {
    params: { nomProducte },
  } = req;

  if (!nomProducte) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'nomProducte'" },
      });
    return;
  }

  try {
    const producte = await producteService.getOneProducte(nomProducte);
    res.status(200).send({ status: "OK", data: producte });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error }});
  }
});

const createNewProducte = (async (req, res) => {
  const { body } = req;
  
  if (
    !body.nom ||
    !body.tipus ||
    !body.preu ||
    !body.categoria
  ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "Falta un dels seguents parametres: 'nom', 'tipus', 'preu', 'categoria'",
        },
      });
    return;
  }

  const newProducte = {
    nom: body.nom,
    tipus: body.tipus,
    preu: body.preu,
    categoria: body.categoria
  };

  try {
    const createdProducte = await producteService.createNewProducte(newProducte);
    res.status(201).send({ status: "OK", data: createdProducte });
  } catch (error) {
    res.status(error.status).send({ status: "FAILED", data: { error: error?.message || error }});
  }
});

const updateOneProducte = (async (req, res) => {
  const {
    body,
    params: { nomProducte },
  } = req;

  if (!nomProducte) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'nomProducte'" },
      });
  }

  try {
    const canvis = {
      nom: body.nom ? body.nom : null,
      tipus: body.tipus ? body.tipus : null,
      preu: body.preu ? body.preu : null,
      categoria: body.categoria ? body.categoria : null
    };
    await producteService.updateOneProducte(nomProducte, canvis);
    const updatedProducte = await producteService.getOneProducte(nomProducte);
    res.status(200).send({ status: "OK", data: updatedProducte });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error }});
  }
});

const deleteOneProducte = (async (req, res) => {
  const {
    body,
    params: { nomProducte },
  } = req;

  if (!nomProducte) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'nomProducte'" },
      });
    return;
  }

  try {
    const deletedProducte = await producteService.deleteOneProducte(nomProducte, body);
    res.status(200).send({ status: "OK", data: deletedProducte });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error }});
  }
});

const getProducteEstocs = (async (req, res) => {
  const {
    params: { nomProducte },
  } = req;
  
  if (!nomProducte) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Falta el parametre 'nomProducte'" },
      });
    return;
  }
  
  if (req.query.disponible !== undefined) {
    try {
      const producteEstocsDisponibles = await producteService.getProducteEstocsDisponibles(nomProducte);
      res.status(200).send({ status: "OK", data: producteEstocsDisponibles });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  } else {
    try {
      const producteEstocs = await producteService.getProducteEstocs(nomProducte);
      res.status(200).send({ status: "OK", data: producteEstocs });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  }
});


module.exports = {
  getAllProductes,
  getOneProducte,
  createNewProducte,
  updateOneProducte,
  deleteOneProducte,
  getProducteEstocs,
};