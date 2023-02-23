const express = require("express");
const router = express.Router();

const usuariController = require("../../Controllers/UsuariController");

router.get("/", usuariController.getAllUsuaris);

// router.get("/:idEstoc", usuariController.getOneEstoc);

router.post("/", usuariController.createNewUsuari);

// router.patch("/:idEstoc", usuariController.updateOneEstoc);

router.delete("/:idUsuari", usuariController.deleteOneUsuari);

router.get("/:idUsuari/tasques", usuariController.getUsuariTasques);

module.exports = router;