const express =require("express");
const router =express.Router()
const {paginateEmployee} =require("../pagination/pagination");

router.get("/paginate",paginateEmployee);


module.exports =router
