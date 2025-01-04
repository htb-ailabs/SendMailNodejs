// const sendEmail = require("../utils/sendEmails");

import sendEmail from "../services/email.services.js";

// require("dotenv").config();
import "dotenv/config";

const emailController = {
  sendEmailC: async (req, res) => {
    try {
      const { email, message, subject } = req.body;

      if (!email) {
        return res.status(400).json({ message: "Email is required." });
      }

      const options = {
        to: email,
        subject: subject,
        message: message,
      };

      await sendEmail(options);

      res.status(200).json({
        message: "Check your mail!",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default emailController;
