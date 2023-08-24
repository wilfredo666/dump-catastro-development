const { Router } = require("express");
const {
  getBuilding,
} = require("../controllers/poligonos/construcciones19_controller");
const { getLand } = require("../controllers/poligonos/terrenos19_controller");
const router = Router();

router.get("/construcciones19", getBuilding);
router.get("/terrenos19", getLand);

module.exports = router;
