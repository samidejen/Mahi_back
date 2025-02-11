import nodemailer from "nodemailer";
import config from "../config/index";

const configuration = {
  service: "gmail",
  auth: {
    user: config.email,
    pass: config.password,
  },
};
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: config.email,
    pass: config.password,
  },
});

export default transporter;
