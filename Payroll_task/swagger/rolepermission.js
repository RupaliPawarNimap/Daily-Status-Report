/**
 * @swagger
 * /rolepermissions:
 *   post:
 *     tags:
 *       - RolePermission
 *     summary: Assign a permission to a role
 *     description: Creates a role-permission mapping in the system. Requires Bearer token.
 *     consumes:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Role-Permission mapping details
 *         schema:
 *           type: object
 *           required:
 *             - role_id
 *             - permission_id
 *           properties:
 *             role_id:
 *               type: integer
 *               example: 3
 *             permission_id:
 *               type: integer
 *               example: 6
 *     responses:
 *       201:
 *         description: Role-Permission mapping created successfully
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
 *               example: "Role-Permission mapping created successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 role_id:
 *                   type: integer
 *                   example: 3
 *                 permission_id:
 *                   type: integer
 *                   example: 6
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       409:
 *         description: Mapping already exists
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /rolepermissions:
 *   get:
 *     tags:
 *       - RolePermission
 *     summary: Get all role-permission mappings
 *     description: Returns a list of all role-permission mappings in the system. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of role-permission mappings
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
 *               example: "Role-Permissions fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   role_id:
 *                     type: integer
 *                     example: 3
 *                   permission_id:
 *                     type: integer
 *                     example: 6
 *                   role_name:
 *                     type: string
 *                     example: "Admin"
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
