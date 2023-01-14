const router = require("express").Router();
const categorieController = require("../controllers/categorie.controller");
router.post("/create",categorieController.createCategorie);
router.get("/",categorieController.getAllcategories);
router.put("/edit/:categorieId",categorieController.updateCategorie);
router.delete("/delete/:categorieId",categorieController.deleteCategorie);
router.get("/show/:categorieId",categorieController.findCategorieId);
module.exports = router;
