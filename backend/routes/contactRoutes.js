import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const contactMsg = new Contact(req.body);
    await contactMsg.save();
    res.status(201).json({ message: "Message received" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
