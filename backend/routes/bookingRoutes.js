import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking request received" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
