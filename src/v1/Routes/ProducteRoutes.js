const express = require("express");
const router = express.Router();

const producteController = require("../../Controllers/ProducteController");

/**
 * @openapi
 * /api/v1/productes:
 *   get:
 *     summary: Obtenir tots els productes
 *     tags:
 *       - Productes
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
 *                      nom:
 *                       type: string
 *                       example: "Coca-Cola"
 *                      tipus:
 *                       type: string
 *                       example: "Refrescant"
 *                      preu:
 *                       type: number
 *                       example: 1.5
 *                      categoria:
 *                       type: string
 *                       example: "Begudes"
 *                      createdAt:
 *                       type: string
 *                       example: "2021-05-01"
 *                      updatedAt:
 *                       type: string
 *                       example: "2021-05-01"
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
router.get("/", producteController.getAllProductes);

/**
 * @openapi
 * /api/v1/productes/{nomProducte}:
 *   get:
 *     summary: Obtenir un producte a partir del nom
 *     tags:
 *       - Productes
 *     parameters:
 *       - in: path
 *         name: nomProducte
 *         schema: 
 *           type: string
 *         required: true
 *         description: Nom del producte a buscar
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
 *                      nom:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      tipus:
 *                        type: string
 *                        example: "Refrescant"
 *                      preu:
 *                        type: number
 *                        example: 1.5
 *                      categoria:
 *                        type: string
 *                        example: "Begudes"
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
router.get("/:nomProducte", producteController.getOneProducte);

/**
 * @openapi
 * /api/v1/productes/:
 *   post:
 *     summary: Crea un nou producte
 *     tags:
 *      - Productes
 *     requestBody:
 *       description: Parametres d'un producte
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *              type: object 
 *              properties:
 *                nom:
 *                  type: string
 *                  example: "Coca-Cola"
 *                tipus:
 *                  type: string
 *                  example: "Refrescant"
 *                preu:
 *                  type: number
 *                  example: 1.5
 *                categoria:
 *                  type: string
 *                  example: "Begudes"
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
 *                      nom:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      tipus:
 *                        type: string
 *                        example: "Refrescant"
 *                      preu:
 *                        type: number
 *                        example: 1.5
 *                      categoria:
 *                        type: string
 *                        example: "Begudes"
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
 *                      example: "Falta un dels seguents parametres: 'nom', 'tipus', 'preu', 'categoria'"
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
router.post("/", producteController.createNewProducte);

/**
 * @openapi
 * /api/v1/productes/{nomProducte}:
 *   patch:
 *     summary: Modifica un producte existent
 *     tags:
 *      - Productes
 *     parameters:
 *       - in: path
 *         name: nomProducte
 *         schema: 
 *           type: string
 *         required: true
 *         description: Nom del producte a modificar
 *     requestBody:
 *       description: Parametres d'un producte
 *       required: true
 *       content:
 *         application/json:
 *             schema:
 *              type: object 
 *              properties:
 *                nom:
 *                  type: string
 *                  example: "Coca-Cola"
 *                tipus:
 *                  type: string
 *                  example: "Refrescant"
 *                preu:
 *                  type: number
 *                  example: 1.5
 *                categoria:
 *                  type: string
 *                  example: "Begudes"
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
 *                      nom:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      tipus:
 *                        type: string
 *                        example: "Refrescant"
 *                      preu:
 *                        type: number
 *                        example: 1.5
 *                      categoria:
 *                        type: string
 *                        example: "Begudes"
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
 *                      example: "Falta un dels seguents parametres: 'nom', 'tipus', 'preu', 'categoria'"
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
router.patch("/:nomProducte", producteController.updateOneProducte);

/**
 * @openapi
 * /api/v1/productes/{nomProducte}:
 *   delete:
 *     summary: Eliminar un producte a partir del nom
 *     tags:
 *       - Productes
 *     parameters:
 *       - in: path
 *         name: nomProducte
 *         schema: 
 *           type: string
 *         required: true
 *         description: Nom del producte a eliminar
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
 *                      nom:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      tipus:
 *                        type: string
 *                        example: "Refrescant"
 *                      preu:
 *                        type: number
 *                        example: 1.5
 *                      categoria:
 *                        type: string
 *                        example: "Begudes"
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
 *                      example: "Error al eliminar el producte"
 * 
 */
router.delete("/:nomProducte", producteController.deleteOneProducte);

/**
 * @openapi
 * /api/v1/productes/{nomProducte}/estocs:
 *   get:
 *     summary: Obtenir un producte a partir del nom
 *     tags:
 *       - Productes
 *     parameters:
 *       - in: path
 *         name: nomProducte
 *         schema: 
 *           type: string
 *         required: true
 *         description: Nom del producte a buscar
 *       - in: query
 *         name: disponible
 *         description: Si nomes es volen obtenir els estocs disponibles
 *         required: false
 *         allowEmptyValue: true
 *         schema:
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
 *                  type: array
 *                  items:
 *                    type: object 
 *                    properties:
 *                      id:
 *                        type: string
 *                        example: "37b3267e-a944-419d-8681-9295594fab81"
 *                      producte:
 *                        type: string
 *                        example: "Coca-Cola"
 *                      caducitat:
 *                        type: string
 *                        example: "2021-05-01"
 *                      dataVenda:
 *                        type: string
 *                        example: "2021-05-01"
 *                      ubicacio:
 *                        type: string
 *                        example: "A1"
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
router.get("/:nomProducte/estocs", producteController.getProducteEstocs);

module.exports = router;