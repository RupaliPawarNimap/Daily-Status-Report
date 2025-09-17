/**
 * @swagger
 * /bulkupload:
 *   post:
 *     tags:
 *       - BulkUpload
 *     summary: Bulk upload via file
 *     description: Uploads a file to bulk insert data. Requires Bearer token.
 *     consumes:
 *       - multipart/form-data
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: formData
 *         name: file
 *         type: file
 *         required: true
 *         description: The file to upload (Excel, CSV, etc.)
 *     responses:
 *       201:
 *         description: File uploaded and data inserted successfully
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
 *               example: "File uploaded and processed successfully"
 *             data:
 *               type: object
 *               properties:
 *                 totalRecords:
 *                   type: integer
 *                   example: 50
 *                 insertedRecords:
 *                   type: integer
 *                   example: 50
 *                 failedRecords:
 *                   type: integer
 *                   example: 0
 *       400:
 *         description: Validation error / file missing
 *       401:
 *         description: Unauthorized - missing or invalid token
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /bulkupload:
 *   get:
 *     tags:
 *       - BulkUpload
 *     summary: Get all bulk upload records
 *     description: Returns a list of all bulk uploaded files and their processing details. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of bulk upload records
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
 *               example: "Bulk uploads fetched successfully"
 *             data:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   file_name:
 *                     type: string
 *                     example: "products.xlsx"
 *                   totalRecords:
 *                     type: integer
 *                     example: 50
 *                   insertedRecords:
 *                     type: integer
 *                     example: 50
 *                   failedRecords:
 *                     type: integer
 *                     example: 0
 *                   uploaded_by:
 *                     type: string
 *                     example: "Rupali Pawar"
 *                   uploaded_at:
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


/**
 * @swagger
 * /bulkupload/{id}:
 *   get:
 *     tags:
 *       - BulkUpload
 *     summary: Get a bulk upload record by ID
 *     description: Returns the details of a specific bulk upload by its ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the bulk upload record
 *         example: 1
 *     responses:
 *       200:
 *         description: Bulk upload record found
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
 *               example: "Bulk upload fetched successfully"
 *             data:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 file_name:
 *                   type: string
 *                   example: "products.xlsx"
 *                 totalRecords:
 *                   type: integer
 *                   example: 50
 *                 insertedRecords:
 *                   type: integer
 *                   example: 50
 *                 failedRecords:
 *                   type: integer
 *                   example: 0
 *                 uploaded_by:
 *                   type: string
 *                   example: "Rupali Pawar"
 *                 uploaded_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-12T10:15:30Z"
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
 *         description: Bulk upload record not found
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 404
 *             error:
 *               type: string
 *               example: "Bulk upload record not found"
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
 * /download/{id}:
 *   get:
 *     tags:
 *       - BulkUpload
 *     summary: Download a bulk upload file by ID
 *     description: Downloads the bulk uploaded file for a specific record by ID. Requires Bearer token.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: integer
 *         description: ID of the bulk upload record
 *         example: 4
 *     produces:
 *       - application/octet-stream
 *     responses:
 *       200:
 *         description: File download successful
 *         schema:
 *           type: string
 *           format: binary
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
 *         description: Bulk upload record not found
 *         schema:
 *           type: object
 *           properties:
 *             statusCode:
 *               type: integer
 *               example: 404
 *             error:
 *               type: string
 *               example: "Bulk upload record not found"
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
