const express = require("express");
const router = express.Router();

const maquinaController = require("../../Controllers/MaquinaController");

/**
 * @openapi
 * /api/v1/maquines:
 *   get:
 *     summary: Obtenir totes les maquines
 *     tags:
 *       - Maquines
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
 *                       example: "218b5129-b0c0-4d72-aa11-5a33fca887aa"
 *                      municipi:
 *                       type: string
 *                       example: "Barcelona"
 *                      adreca:
 *                       type: string
 *                       example: "Carrer de la Diputació, 281"
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
 *                      example: "Error al obtenir les maquines"
 * 
 */
router.get("/", maquinaController.getAllMaquines);

/**
 * @openapi
 * /api/v1/maquines/{idMaquina}:
 *   get:
 *     summary: Obtenir una maquina a partir de la seva id
 *     tags:
 *       - Maquines
 *     parameters:
 *       - in: path
 *         name: idMaquina
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id de la maquina a buscar
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
 *                       example: "218b5129-b0c0-4d72-aa11-5a33fca887aa"
 *                      municipi:
 *                       type: string
 *                       example: "Barcelona"
 *                      adreca:
 *                       type: string
 *                       example: "Carrer de la Diputació, 281"
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
 *                      example: "Falta el parametre 'idMaquina'"
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
 *                      example: "Error al obtenir la maquina"
 * 
 */
router.get("/:idMaquina", maquinaController.getOneMaquina);

/**
 * @openapi
 * /api/v1/maquines/{idMaquina}/estocs:
 *   get:
 *     summary: Obtenir tots els estocs de una maquina a partir de la seva id
 *     tags:
 *       - Maquines
 *     parameters:
 *       - in: path
 *         name: idMaquina
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id de la maquina a buscar
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
 *                   type: object 
 *                   properties:
 *                      id:
 *                       type: string
 *                       example: "218b5129-b0c0-4d72-aa11-5a33fca887aa"
 *                      producte:
 *                       type: string
 *                       example: "Coca-Cola"
 *                      caducitat:
 *                       type: string
 *                       example: "2021-12-31"
 *                      dataVenda:
 *                       type: string
 *                       example: "2021-12-31"
 *                      ubicacio:
 *                       type: string
 *                       example: "A1"
 *                      createdAt:
 *                       type: string
 *                       example: "2021-12-31"
 *                      updatedAt:
 *                       type: string
 *                       example: "2021-12-31"
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
 *                      example: "Falta el parametre 'idMaquina'"
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
 *                      example: "Error al obtenir la maquina"
 * 
 */
router.get("/:idMaquina/estocs", maquinaController.getMaquinaEstocs);

/**
 * @openapi
 * /api/v1/maquines/{idMaquina}/calaixos:
 *   get:
 *     summary: Obtenir tots els calaixos de una maquina a partir de la seva id
 *     tags:
 *       - Maquines
 *     parameters:
 *       - in: path
 *         name: idMaquina
 *         schema: 
 *           type: string
 *         required: true
 *         description: Id de la maquina a buscar
 *       - in: query
 *         name: buits
 *         description: Si nomes es volen obtenir els calaixos buits
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
 *                   type: array
 *                   items:
 *                    type: object 
 *                    properties:
 *                      id:
 *                        type: string
 *                        example: "A1"
 *                      maquina:
 *                        type: string
 *                        example: "218b5129-b0c0-4d72-aa11-5a33fca887aa"
 *                      casella:
 *                        type: string
 *                        example: "A1"
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
 *                      example: "Falta el parametre 'idMaquina'"
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
 *                      example: "Error al obtenir la maquina"
 * 
 */
router.get("/:idMaquina/calaixos", maquinaController.getMaquinaCalaixos);

module.exports = router;