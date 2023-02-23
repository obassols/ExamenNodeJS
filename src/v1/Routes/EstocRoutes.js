const express = require("express");
const router = express.Router();

const estocController = require("../../Controllers/EstocController");

/**
 * @openapi
 * /api/v1/estocs:
 *   get:
 *     summary: Obtenir tots els estocs
 *     tags:
 *       - Estocs
 *     parameters:
 *      - in: query
 *        name: venta
 *        schema:
 *         type: string
 *         description: La data de venta dels estocs que es volen obtenir
 *         required: false
 *         example: "2021-04-01"
 *      - in: query
 *        name: disponible
 *        description: Si nomes es volen obtenir els estocs disponibles
 *        required: false
 *        allowEmptyValue: true
 *        schema:
 *          type: boolean
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: 
 *                     type: object
 *                     properties:
 *                      id:
 *                       type: string
 *                       example: "60a9b0f0-9b5e-11eb-9a9e-0b5d9b0f0"
 *                      producte:
 *                       type: string
 *                       example: "Coca-Cola"
 *                      caducitat:
 *                       type: string
 *                       example: "2021-05-01"
 *                      dataVenda:
 *                       type: string
 *                       example: "2021-04-01"
 *                      ubicacio:
 *                       type: string
 *                       example: "A1"
 *                      createdAt:
 *                       type: string
 *                       example: "2021-02-01"
 *                      updatedAt:
 *                       type: string
 *                       example: "2021-04-01"
 *       5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Error al obtenir els productes"
 * 
 */
router.get("/", estocController.getAllEstocs);

/**
 * @openapi
 * /api/v1/estocs/{idEstoc}:
 *   get:
 *     summary: Obtenir un estoc a partir de la id
 *     tags:
 *       - Estocs
 *     parameters:
 *       - in: path
 *         name: idEstoc
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id de l'estoc a obtenir
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                      id:
 *                       type: string
 *                       example: "60a9b0f0-9b5e-11eb-9a9e-0b5d9b0f0"
 *                      producte:
 *                       type: string
 *                       example: "Coca-Cola"
 *                      caducitat:
 *                       type: string
 *                       example: "2021-05-01"
 *                      dataVenda:
 *                       type: string
 *                       example: "2021-04-01"
 *                      ubicacio:
 *                       type: string
 *                       example: "A1"
 *                      createdAt:
 *                       type: string
 *                       example: "2021-02-01"
 *                      updatedAt:
 *                       type: string
 *                       example: "2021-04-01"
 *       400:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Falta el parametre 'nomProducte'"
 *       5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Error al obtenir el producte"
 * 
 */
router.get("/:idEstoc", estocController.getOneEstoc);

/**
 * @openapi
 * /api/v1/estocs/:
 *   post:
 *     summary: Crea un nou estoc
 *     tags:
 *      - Estocs
 *     requestBody:
 *       description: Parametres d'un producte
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *              type: object 
 *              properties:
 *                producte:
 *                  type: string
 *                  example: "Coca-Cola"
 *                caducitat:
 *                  type: string
 *                  example: "2021-05-01"
 *                ubicacio:
 *                  type: string
 *                  example: "A1"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                      id:
 *                        type: string
 *                        example: "60a9b0f0-9b5e-11eb-9a9e-0b5d9b0f0"
 *                      producte:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      caducitat:
 *                        type: string
 *                        example: "2021-05-01"
 *                      dataVenda:
 *                        type: string
 *                        example: "2021-04-01"
 *                      ubicacio:
 *                        type: string
 *                        example: "A1"
 *                      createdAt:
 *                        type: string
 *                        example: "2021-02-01"
 *                      updatedAt:
 *                        type: string
 *                        example: "2021-04-01"
 *       400:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Falta un dels seguents parametres: 'producte', 'caducitat', 'ubicacio'"
 *       5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Error al crear el producte"
 * 
 */
router.post("/", estocController.createNewEstoc);

/**
 * @openapi
 * /api/v1/estocs/{idEstoc}:
 *   patch:
 *     summary: Modifica un estoc existent
 *     tags:
 *      - Estocs
 *     parameters:
 *       - in: path
 *         name: idEstoc
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id del estoc a modificar
 *     requestBody:
 *       description: Parametres d'un estoc
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *              type: object 
 *              properties:
 *                producte:
 *                  type: string
 *                  example: "Coca-Cola"
 *                caducitat:
 *                  type: string
 *                  example: "2021-05-01"
 *                dataVenda:
 *                  type: string
 *                  example: "2021-04-01"
 *                ubicacio:
 *                  type: string
 *                  example: "A1"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                      id:
 *                        type: string
 *                        example: "60a9b0f0-9b5e-11eb-9a9e-0b5d9b0f0"
 *                      producte:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      caducitat:
 *                        type: string
 *                        example: "2021-05-01"
 *                      dataVenda:
 *                        type: string
 *                        example: "2021-04-01"
 *                      ubicacio:
 *                        type: string
 *                        example: "A1"
 *                      createdAt:
 *                        type: string
 *                        example: "2021-02-01"
 *                      updatedAt:
 *                        type: string
 *                        example: "2021-04-01"
 *       400:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Falta un dels seguents parametres: 'producte', 'caducitat', 'ubicacio'"
 *       5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Error al crear el producte"
 * 
 */
router.patch("/:idEstoc", estocController.updateOneEstoc);

/**
 * @openapi
 * /api/v1/estocs/{idEstoc}:
 *   delete:
 *     summary: Eliminar un estoc a partir del la seva id
 *     tags:
 *       - Estocs
 *     parameters:
 *       - in: path
 *         name: idEstoc
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id del estoc a eliminar
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object 
 *                   properties:
 *                      id:
 *                        type: string
 *                        example: "e6cb1718-aea7-4dcd-8dfc-d0a286bb66eb"
 *                      producte:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      caducitat:
 *                        type: string
 *                        example: "2021-05-01"
 *                      dataVenda:
 *                        type: string
 *                        example: null
 *                      ubicacio: 
 *                        type: string
 *                        example: "7839c4d1-5c8d-4610-9816-7687ba1ea230"
 *                      createdAt:
 *                        type: string
 *                        example: "2021-05-01"
 *                      updatedAt:
 *                        type: string
 *                        example: "2021-05-01"
 *       400:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Falta el parametre 'idEstoc'"
 *       5XX:
 *        description: FAILED
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  example: FAILED
 *                data:
 *                  type: object
 *                  properties:
 *                    error:
 *                      type: string
 *                      example: "Error al eliminar l'estoc"
 * 
 */
router.delete("/:idEstoc", estocController.deleteOneEstoc);

module.exports = router;