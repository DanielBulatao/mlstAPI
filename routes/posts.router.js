const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.post("/createUsersAccount", postsController.createUsersAccount)
router.post("/retrieveUsersAccount/:id/:password", postsController.retrieveUsersAccount)
router.post("/createAppeals", postsController.createAppeals)
router.get("/retrieveAllAppeals", postsController.retrieveAllAppeals)
router.put("/updateAppeals/:appealsID", postsController.updateAppeals)
router.delete("/deleteAppeals/:appealsID", postsController.deleteAppeals)

module.exports = router