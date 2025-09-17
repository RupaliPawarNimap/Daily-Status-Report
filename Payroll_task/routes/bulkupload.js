const express=require("express");
const router =express.Router();
const {bulkUploadUsers,listBulkUploads, downloadUploadedFile} =require("../controllers/bulkupload");
const { checkAuth } = require("../middleware/checkauth");
const {upload} =require("../utils/multer")
const { checkPermission } = require("../middleware/checkPermission");

router.post("/bulkupload",upload.single("file"),checkAuth,checkPermission, bulkUploadUsers);
router.get("/bulkupload", checkAuth,checkPermission,listBulkUploads);
router.get("/download/:id",checkAuth,checkPermission, downloadUploadedFile);

module.exports=router