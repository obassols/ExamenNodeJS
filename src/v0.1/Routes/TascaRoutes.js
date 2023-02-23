const express = require("express");
const router = express.Router();

const tascaController = require("../../Controllers/TascaController");

// router.get("/", usuariController.getAllUsuaris);

router.get("/:idTasca", tascaController.getOneTasca);

router.post("/", tascaController.createNewTasca);

router.patch("/:idTasca", tascaController.updateOneTasca);

router.delete("/:idTasca", tascaController.deleteOneTasca);

module.exports = router;