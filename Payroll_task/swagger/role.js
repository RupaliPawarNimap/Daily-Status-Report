/**
 * @swagger
 * /roles:
 *   post:
 *     tags:
 *       - Role
 *     summary: Create a new role
 *     description: Creates a new role in the system.
 *     consumes:
 *       - application/json
 *     security:
 *       - bearerAuth: []          # <-- this enables the Bearer token
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Role information
 *         schema:
 *           type: object
 *           required:
 *             - role_name
 *           properties:
 *             role_name:
 *               type: string
 *               example: "Admin"
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Validation error
 *       409:
 *         description: Role already exists
 */


 /**
 * @swagger
 * /roles:
 *   get:
 *     tags:
 *       - Role
 *     summary: Get all roles
 *     description: Returns a list of all roles in the system. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of roles
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
 *               example: "Roles fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   role_name:
 *                     type: string
 *                     example: "Admin"
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
