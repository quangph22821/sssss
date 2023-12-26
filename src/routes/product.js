import express from "express";
import { deleteProduct, getAll, getId, postProduct, putProduct } from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();


router.get("/", (req, res) => {
    console.log("home page");
})
router.get("/products", getAll)
router.get("/products/:id", getId)
router.post("/products",checkPermission,  postProduct)
router.put("/products/:id", checkPermission, putProduct)
router.delete("/products/:id",checkPermission,  deleteProduct)


export default router;