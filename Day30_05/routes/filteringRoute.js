const express =require("express");
const router =express.Router();
const {filterByname,filterMultiple,} =require("../controllers/filter");
const { paginateProduct ,FilterAndPaginate, paginateSorting} = require("../controllers/pagination");



router.get("/filter",filterByname)
router.get("/filtermul",filterMultiple)
router.get("/paginate",paginateProduct)
router.get("/filterPaginate",FilterAndPaginate)
router.get("/order",paginateSorting)
module.exports =router