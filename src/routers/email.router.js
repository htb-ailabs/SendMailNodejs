// const express = require("express");
// const router = express.Router();
// const { sendEmail } = require("../controllers/email.js");

// router.post("/data", sendEmail);

// module.exports = router;

// import express from 'express'

// const emailRouter = express.Router()
import express from "express";
import emailController from "../controllers/email.controller.js";

const emailRouter = express.Router();
emailRouter.post(`/sendmail`, emailController.sendEmailC);

export default emailRouter;
