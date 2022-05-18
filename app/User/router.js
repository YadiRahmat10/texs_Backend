const express = require("express");
const {
  viewUser,
  actionCreateUser,
  actionUpdateUser,
  actionDeleteUser,
  viewUserDetail,
} = require("./controller");
const router = express.Router();

router.get("/user", viewUser);
router.get("/user/:id", viewUserDetail);
router.post("/add-user", actionCreateUser);
router.patch("/update-user/:id", actionUpdateUser);
router.delete("/delete-user/:id", actionDeleteUser);

module.exports = router;
