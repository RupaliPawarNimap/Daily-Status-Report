/**
 * @swagger
 * /blocks:
 *   post:
 *     tags:
 *       - BlockUser
 *     summary: Block a user
 *     description: Creates a blocked user entry in the system. Requires Bearer token.
 *     consumes:
 *       - application/json
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Block user details
 *         schema:
 *           type: object
 *           required:
 *             - blocked_user
 *           properties:
 *             blocked_user:
 *               type: integer
 *               example: 3
 *     responses:
 *       201:
 *         description: User blocked successfully
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
 *               example: "User blocked successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 blocked_user:
 *                   type: integer
 *                   example: 3
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       409:
 *         description: User already blocked
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /blocks:
 *   get:
 *     tags:
 *       - BlockUser
 *     summary: Get all blocked users
 *     description: Returns a list of all blocked users. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of blocked users
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
 *               example: "Blocked users fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   blocked_user:
 *                     type: integer
 *                     example: 3
 *                   blocked_user_name:
 *                     type: string
 *                     example: "Rupali Pawar"
 *                   blocked_at:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-09-12T10:15:30Z"
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
