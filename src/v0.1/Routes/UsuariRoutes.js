const express = require("express");
const router = express.Router();

const usuariController = require("../../Controllers/UsuariController");

router.get("/", usuariController.getAllUsuaris);

router.post("/", usuariController.createNewUsuari);

router.delete("/:idUsuari", usuariController.deleteOneUsuari);

router.get("/:idUsuari/tasques", usuariController.getUsuariTasques);

module.exports = router;