const express =require("express");
const router =express.Router()
const block =require("../controllers/blockedUser")


router.post("/blockers",block.createBlockUser);
router.get("/blockers",block.getAllBlockUser);
router.get("/blockers/:id",block.getBlockUserById);
router.put("/blockers/:id",block.UpdateBlockedUser)
router.delete("blockers/:id",block.deleteBlockedUser)


module.exports=router