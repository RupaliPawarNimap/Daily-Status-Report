/**
 * @swagger
 * /appointementAttendees/response:
 *   get:
 *     tags:
 *       - Appointment Attendees
 *     summary: Get appointment attendees by response
 *     description: Returns a list of appointment attendees filtered by response status. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: response
 *         required: true
 *         type: string
 *         description: Filter attendees by response status
 *         enum: [accepted, declined, pending]
 *         example: pending
 *     responses:
 *       200:
 *         description: List of attendees filtered by response
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
 *               example: "Attendees fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   appointment_id:
 *                     type: integer
 *                     example: 101
 *                   attendee_id:
 *                     type: integer
 *                     example: 5
 *                   attendee_name:
 *                     type: string
 *                     example: "Rupali Pawar"
 *                   response:
 *                     type: string
 *                     example: "pending"
 *                   responded_at:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-09-12T10:15:30Z"
 *       400:
 *         description: Invalid response value
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 400
 *             error:
 *               type: string
 *               example: "Invalid response value, must be accepted, declined, or pending"
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
 * /appointementAttendees:
 *   get:
 *     tags:
 *       - Appointment Attendees
 *     summary: Get all appointment attendees
 *     description: Returns all appointment attendees along with their appointment details and creator info.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All appointment attendees fetched successfully
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
 *               example: "All Appointment Details Found Successfully"
 *             details:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   response:
 *                     type: string
 *                     example: "pending"
 *                   appointment:
 *                     type: object
 *                     properties:
 *                       start_time:
 *                         type: string
 *                         example: "2025-09-12T10:00:00.000Z"
 *                       end_time:
 *                         type: string
 *                         example: "2025-09-12T11:00:00.000Z"
 *                       location:
 *                         type: string
 *                         example: "Conference Room A"
 *                       creator:
 *                         type: object
 *                         properties:
 *                           first_name:
 *                             type: string
 *                             example: "Rupali"
 *                           last_name:
 *                             type: string
 *                             example: "Pawar"
 *                   user:
 *                     type: object
 *                     properties:
 *                       first_name:
 *                         type: string
 *                         example: "John"
 *                       last_name:
 *                         type: string
 *                         example: "Doe"
 *                       email:
 *                         type: string
 *                         example: "john.doe@example.com"
 *       401:
 *         description: Unauthorized - Missing or invalid token
 *       500:
 *         description: Internal Server Error
 */
