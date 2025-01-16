const express = require("express");
const router = express.Router();

const authMiddleware = require("../Controller/authMiddleware");

const {
  createPublication,
  getPublication,
  deletePublication,
  updatePublication,
  cachePublication,
} = require("../Controller/PublicationController");

router.post("/create", authMiddleware, createPublication);
router.get("/getPublications", getPublication);
router.delete("/delete/:id", deletePublication);
router.put("/edit/:id", updatePublication);

router.get("/get", cachePublication);

module.exports = router;
