/**
 * @swagger
 * /appointements:
 *   post:
 *     tags:
 *       - Appointments
 *     summary: Create a new appointment
 *     description: Creates a new appointment with details and attendees. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: Appointment details to create
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - start_time
 *             - end_time
 *             - attendees
 *           properties:
 *             title:
 *               type: string
 *               example: "Design Review"
 *             description:
 *               type: string
 *               example: "UI/UX design review with design team"
 *             start_time:
 *               type: string
 *               format: date-time
 *               example: "2025-09-11T14:00:00Z"
 *             end_time:
 *               type: string
 *               format: date-time
 *               example: "2025-09-11T15:30:00Z"
 *             location:
 *               type: string
 *               example: "Google Meet"
 *             meeting_link:
 *               type: string
 *               example: "https://meet.google.com/design1"
 *             attendees:
 *               type: array
 *               items:
 *                 type: integer
 *               example: [8]
 *     responses:
 *       201:
 *         description: Appointment created successfully
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
 *               example: "Appointment created successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 12
 *                 title:
 *                   type: string
 *                   example: "Design Review"
 *                 description:
 *                   type: string
 *                   example: "UI/UX design review with design team"
 *                 start_time:
 *                   type: string
 *                   example: "2025-09-11T14:00:00Z"
 *                 end_time:
 *                   type: string
 *                   example: "2025-09-11T15:30:00Z"
 *                 location:
 *                   type: string
 *                   example: "Google Meet"
 *                 meeting_link:
 *                   type: string
 *                   example: "https://meet.google.com/design1"
 *                 attendees:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   example: [8]
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /appointements:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Get all appointments
 *     description: Retrieves a list of all appointments. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of appointments retrieved successfully
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
 *               example: "Appointments retrieved successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 12
 *                   title:
 *                     type: string
 *                     example: "Design Review"
 *                   description:
 *                     type: string
 *                     example: "UI/UX design review with design team"
 *                   start_time:
 *                     type: string
 *                     example: "2025-09-11T14:00:00Z"
 *                   end_time:
 *                     type: string
 *                     example: "2025-09-11T15:30:00Z"
 *                   location:
 *                     type: string
 *                     example: "Google Meet"
 *                   meeting_link:
 *                     type: string
 *                     example: "https://meet.google.com/design1"
 *                   attendees:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [8, 10]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /appointements/{id}:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Get appointment by ID
 *     description: Retrieves the details of a specific appointment by its ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the appointment to retrieve
 *         example: 7
 *     responses:
 *       200:
 *         description: Appointment retrieved successfully
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
 *               example: "Appointment retrieved successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 7
 *                 title:
 *                   type: string
 *                   example: "Design Review"
 *                 description:
 *                   type: string
 *                   example: "UI/UX design review with design team"
 *                 start_time:
 *                   type: string
 *                   example: "2025-09-11T14:00:00Z"
 *                 end_time:
 *                   type: string
 *                   example: "2025-09-11T15:30:00Z"
 *                 location:
 *                   type: string
 *                   example: "Google Meet"
 *                 meeting_link:
 *                   type: string
 *                   example: "https://meet.google.com/design1"
 *                 attendees:
 *                   type: array
 *                   items:
 *                     type: integer
 *                   example: [8, 10]
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /appointements/{id}:
 *   delete:
 *     tags:
 *       - Appointments
 *     summary: Delete appointment by ID
 *     description: Deletes a specific appointment by its ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the appointment to delete
 *         example: 8
 *     responses:
 *       200:
 *         description: Appointment deleted successfully
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
 *               example: "Appointment deleted successfully"
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Appointment not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /appointements:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Get all appointments by status
 *     description: Retrieves a list of appointments filtered by status. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
 *         type: string
 *         description: Filter appointments by status
 *         enum: [scheduled, completed, cancelled]
 *         example: scheduled
 *     responses:
 *       200:
 *         description: List of appointments retrieved successfully
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
 *               example: "Appointments retrieved successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 15
 *                   title:
 *                     type: string
 *                     example: "Design Review"
 *                   description:
 *                     type: string
 *                     example: "UI/UX design review with design team"
 *                   start_time:
 *                     type: string
 *                     example: "2025-09-11T14:00:00Z"
 *                   end_time:
 *                     type: string
 *                     example: "2025-09-11T15:30:00Z"
 *                   status:
 *                     type: string
 *                     example: "scheduled"
 *                   location:
 *                     type: string
 *                     example: "Google Meet"
 *                   meeting_link:
 *                     type: string
 *                     example: "https://meet.google.com/design1"
 *                   attendees:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [8, 10]
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /appointements/filter:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Filter appointments by date range
 *     description: Retrieves appointments that fall within the given start and end date range. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: start_date
 *         required: true
 *         type: string
 *         format: date
 *         description: Start date for filtering (YYYY-MM-DD)
 *         example: 2025-09-10
 *       - in: query
 *         name: end_date
 *         required: true
 *         type: string
 *         format: date
 *         description: End date for filtering (YYYY-MM-DD)
 *         example: 2025-09-11
 *     responses:
 *       200:
 *         description: List of filtered appointments retrieved successfully
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
 *               example: "Appointments retrieved successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 18
 *                   title:
 *                     type: string
 *                     example: "Team Sprint Planning"
 *                   description:
 *                     type: string
 *                     example: "Sprint planning with dev team"
 *                   start_time:
 *                     type: string
 *                     example: "2025-09-10T09:00:00Z"
 *                   end_time:
 *                     type: string
 *                     example: "2025-09-10T10:00:00Z"
 *                   status:
 *                     type: string
 *                     example: "scheduled"
 *                   location:
 *                     type: string
 *                     example: "Zoom"
 *                   meeting_link:
 *                     type: string
 *                     example: "https://zoom.us/j/123456789"
 *                   attendees:
 *                     type: array
 *                     items:
 *                       type: integer
 *                     example: [8, 12]
 *       400:
 *         description: Validation error (missing or invalid dates)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
    /**
 * @swagger
 * /appointements/exports:
 *   get:
 *     tags:
 *       - Appointments
 *     summary: Export appointments to Excel
 *     description: Exports appointments into an Excel file. You can filter by status (e.g., scheduled, completed, cancelled). Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: status
 *         required: false
 *         type: string
 *         description: Filter appointments by status
 *         enum: [scheduled, completed, cancelled]
 *         example: scheduled
 *     produces:
 *       - application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
 *     responses:
 *       200:
 *         description: Excel file generated successfully
 *         schema:
 *           type: string
 *           format: binary
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
