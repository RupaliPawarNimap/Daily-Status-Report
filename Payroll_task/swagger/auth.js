
/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Login user and get JWT token
 *     description: User logs in with email and password and receives a JWT token.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Login credentials
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: "example@email.com"
 *             password:
 *               type: string
 *               example: "Pass@12345"
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *         schema:
 *           type: object
 *           properties:
 *             token:
 *               type: string
 *               example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Invalid credentials
 */

/**
 * @swagger
 * /forgotpassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Forgot password
 *     description: Sends a password reset link or OTP to the user's email.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: User email to send the password reset OTP/link
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *               example: "roopapowar221@gmail.com"
 *     responses:
 *       200:
 *         description: OTP sent successfully
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
 *               example: "OTP sent to email successfully"
 *       400:
 *         description: Validation error / email missing
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 400
 *             error:
 *               type: string
 *               example: "Email is required"
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
 * /resetpassword:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Reset password
 *     description: Resets the user's password using the OTP sent to their email.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Reset password details
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - otp
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: "roopapowar221@gmail.com"
 *             otp:
 *               type: integer
 *               example: 967104
 *             password:
 *               type: string
 *               example: "rupalip@123"
 *     responses:
 *       200:
 *         description: Password reset successfully
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
 *               example: "Password reset successfully"
 *       400:
 *         description: Validation error / missing fields / invalid OTP
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 400
 *             error:
 *               type: string
 *               example: "OTP is invalid or expired"
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
 * /logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Logout user
 *     description: Logs out the currently authenticated user by invalidating their token. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
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
 *               example: "Logout successful"
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

