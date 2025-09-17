/**
 * @swagger
 * /permissions:
 *   post:
 *     tags:
 *       - Permission
 *     summary: Create a new permission
 *     description: Creates a new permission in the system. Requires Bearer token.
 *     consumes:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Permission details
 *         schema:
 *           type: object
 *           required:
 *             - action_name
 *             - method
 *             - base_url
 *             - path
 *           properties:
 *             action_name:
 *               type: string
 *               example: "Create The Role"
 *             method:
 *               type: string
 *               example: "POST"
 *             base_url:
 *               type: string
 *               example: "/api"
 *             path:
 *               type: string
 *               example: "/roles"
 *             description:
 *               type: string
 *               example: "Allows creating a new role"
 *               description: "Optional field"
 *     responses:
 *       201:
 *         description: Permission created successfully
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 201
 *             success:
 *               type: boolean
 *               example: true
 *             message:
 *               type: string
 *               example: "Permission created successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 action_name:
 *                   type: string
 *                   example: "Create The Role"
 *                 method:
 *                   type: string
 *                   example: "POST"
 *                 base_url:
 *                   type: string
 *                   example: "/api"
 *                 path:
 *                   type: string
 *                   example: "/roles"
 *                 description:
 *                   type: string
 *                   example: "Allows creating a new role"
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       409:
 *         description: Permission already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /permissions:
 *   get:
 *     tags:
 *       - Permission
 *     summary: Get all permissions
 *     description: Returns a list of all permissions in the system. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of permissions
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 200
 *             success:
 *               type: boolean
 *               example: true
 *             message:
 *               type: string
 *               example: "Permissions fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   action_name:
 *                     type: string
 *                     example: "Create The Role"
 *                   method:
 *                     type: string
 *                     example: "POST"
 *                   base_url:
 *                     type: string
 *                     example: "/api"
 *                   path:
 *                     type: string
 *                     example: "/roles"
 *                   description:
 *                     type: string
 *                     example: "Allows creating a new role"
 *       401:
 *         description: Unauthorized - missing or invalid token
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 401
 *             error:
 *               type: string
 *               example: "Unauthorized"
 *       500:
 *         description: Internal server error
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 500
 *             error:
 *               type: string
 *               example: "Internal server error"
 */
