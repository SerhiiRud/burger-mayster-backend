const express = require("express");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/burger");
const {
  getAll,
  getById,
  add,
  deleteById,
  updateById,
} = require("../../controllers/burgers");

router.get("/", getAll);

router.get("/:id", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), add);

router.delete("/:id", isValidId, deleteById);

router.put("/:id", isValidId, validateBody(schemas.addSchema), updateById);

module.exports = router;
