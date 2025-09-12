 const xlsx = require("xlsx");
 const path =require("path")
const {BulkUpload,User,Role} =require("../models/index")
 
 
const fs = require("fs");
const { sequelize } = require("../config/db");
const t =sequelize.transaction()
const bulkUploadUsers = async (req, res) => {
  try {
  //  const  {file }=req.body
    if (!req.file) {
      return res.status(400).json({ msg: "Please upload a file" });
    }

    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    let successCount = 0;
    let errorCount = 0;
    let errors = [];

    for (const row of rows) {
      try {
         
        if (!row.first_name || !row.last_name || !row.email || !row.password || !row.role_name) {
          errorCount++;
          errors.push({ row, reason: "Missing required fields" });
          continue;
        }

         
        const role = await Role.findOne({ where: { role_name: row.role_name } });
        if (!role) {
          errorCount++;
          errors.push({ row, reason: "Invalid role" });
          continue;
        }

         
        const existing = await User.findOne({ where: { email: row.email } });
        if (existing) {
          errorCount++;
          errors.push({ row, reason: "Duplicate email" });
          continue;
        }

         
        await User.create({
          first_name: row.first_name,
          last_name: row.last_name,
          email: row.email,
          password: row.password,  
          role_name: row.role_name,
          role_id: role.id,
        });

        successCount++;
      } catch (err) {
        errorCount++;
        errors.push({ row, reason: err.message });
      }
    }

await BulkUpload.create({
  file_name: req.file.filename,
  file_path: `/uploads/${req.file.filename}`,    
  total_records: rows.length,                    
  success_count: successCount,
  error_count: errorCount,
  uploaded_by: req.user.id,
});


    return res.status(200).json({
      msg: "Bulk upload finished",
      successCount,
      errorCount,
      filePath: `/uploads/${req.file.filename}`,
      errors,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};
 
const listBulkUploads = async (req, res) => {
  try {
    const uploads = await BulkUpload.findAll({ order: [["created_at", "DESC"]] });
    return res.status(200).json({ msg: "Bulk uploads fetched", uploads });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

const downloadUploadedFile = async (req, res) => {
  try {
    const id= req.params.id;

     
    const upload = await BulkUpload.findOne({
        where:{
            uploaded_by:req.user.id,
            id:id
        }
    })
   
    console.log(upload.file_path);
    if (!upload) {
      return res.status(404).json({ msg: "File not found in records" });
    }

    const filePath = path.join(__dirname, "..", upload.file_path);

    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ msg: "File not found on server" });
    }

    return res.download(filePath, upload.file_name);  
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

module.exports = { bulkUploadUsers, listBulkUploads ,downloadUploadedFile};
