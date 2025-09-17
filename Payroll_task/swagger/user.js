/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - User
 *     summary: Register a new user
 *     description: Creates a new user in the system. Requires Bearer token.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: User registration details
 *         schema:
 *           type: object
 *           required:
 *             - first_name
 *             - last_name
 *             - email
 *             - password
 *             - role_name
 *           properties:
 *             first_name:
 *               type: string
 *               example: "Rupali"
 *             last_name:
 *               type: string
 *               example: "Pawar"
 *             email:
 *               type: string
 *               example: "rupali@gmail.com"
 *             password:
 *               type: string
 *               example: "rupali@123"
 *             role_name:
 *               type: string
 *               example: "Admin"
 *             is_active:
 *               type: boolean
 *               example: true
 *     responses:
 *       201:
 *         description: User created successfully
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
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User Created Successfully"
 *                 code:
 *                   type: integer
 *                   example: 201
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 first_name:
 *                   type: string
 *                   example: "Rupali"
 *                 last_name:
 *                   type: string
 *                   example: "Pawar"
 *                 email:
 *                   type: string
 *                   example: "rupali@gmail.com"
 *                 role_name:
 *                   type: string
 *                   example: "Admin"
 *                 is_active:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 400
 *             error:
 *               type: string
 *               example: "Email is required"
 *       409:
 *         description: User already exists
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 409
 *             error:
 *               type: string
 *               example: "User already exists"
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
 */

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     description: Returns a list of all users in the system. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
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
 *               example: "Users fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   first_name:
 *                     type: string
 *                     example: "Rupali"
 *                   last_name:
 *                     type: string
 *                     example: "Pawar"
 *                   email:
 *                     type: string
 *                     example: "rupali@gmail.com"
 *                   role_name:
 *                     type: string
 *                     example: "Admin"
 *                   is_active:
 *                     type: boolean
 *                     example: true
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

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get a user by ID
 *     description: Returns a single user based on ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the user
 *         example: 3
 *     responses:
 *       200:
 *         description: User found
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
 *               example: "User fetched successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 first_name:
 *                   type: string
 *                   example: "Rupali"
 *                 last_name:
 *                   type: string
 *                   example: "Pawar"
 *                 email:
 *                   type: string
 *                   example: "rupali@gmail.com"
 *                 role_name:
 *                   type: string
 *                   example: "Admin"
 *                 is_active:
 *                   type: boolean
 *                   example: true
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
 *       404:
 *         description: User not found
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 404
 *             error:
 *               type: string
 *               example: "User not found"
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


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Update a user
 *     description: Updates user details. All fields are optional. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the user to update
 *         example: 3
 *       - in: body
 *         name: body
 *         required: true
 *         description: Fields to update (all optional)
 *         schema:
 *           type: object
 *           properties:
 *             first_name:
 *               type: string
 *               example: "Rupali"
 *             last_name:
 *               type: string
 *               example: "Pawar"
 *             email:
 *               type: string
 *               example: "rupali@gmail.com"
 *             role_name:
 *               type: string
 *               example: "Admin"
 *             is_active:
 *               type: boolean
 *               example: true
 *     responses:
 *       200:
 *         description: User updated successfully
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
 *               example: "User updated successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 3
 *                 first_name:
 *                   type: string
 *                   example: "Rupali"
 *                 last_name:
 *                   type: string
 *                   example: "Pawar"
 *                 email:
 *                   type: string
 *                   example: "rupali@gmail.com"
 *                 role_name:
 *                   type: string
 *                   example: "Admin"
 *                 is_active:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete a user
 *     description: Deletes a user by ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the user to delete
 *         example: 3
 *     responses:
 *       200:
 *         description: User deleted successfully
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
 *               example: "User deleted successfully"
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
 *       404:
 *         description: User not found
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 404
 *             error:
 *               type: string
 *               example: "User not found"
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

