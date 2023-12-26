import express from "express";
import { authenticate } from "../middlewares/authenticate";
import {  getBill, getBills, getUserBills, updateBill } from "../controllers/bill";

const router = express.Router();

router.get("/bills", authenticate, getBills);
router.get("/bills/user/:userId", authenticate, getUserBills);
router.get("/bills/:billId", authenticate, getBill);
router.put("/bills/update/:billId", authenticate,updateBill);

export default router;