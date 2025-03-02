const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const serverless = require("serverless-http");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// ✅ Use a connection pool instead of a single connection
const db = mysql.createPool({
  connectionLimit: 10, // Allows multiple connections
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// ✅ Check MySQL Connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ MySQL Connected...");
    connection.release(); // Release connection after testing
  }
});

// ✅ Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Default Route
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// ✅ Send Mail and Save to DB
app.post("/send-mail", (req, res) => {
  const { yourmail, body } = req.body;

  if (!yourmail || !body) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Insert Data into MySQL
  const sql = "INSERT INTO mails (yourmail, body) VALUES (?, ?)";
  db.query(sql, [yourmail, body], (err, result) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ message: "Database error", error: err });
    }

    // ✅ Email Sending Setup
    const mailOptions = {
      from: yourmail, // Sender's Email
      to: process.env.RECEIVER_EMAIL, // Receiver Email
      subject: "New Message from Contact Form",
      text: `You received a new message from: ${yourmail}\n\nMessage:\n${body}`,
      replyTo: yourmail, // Allows direct replies
    };

    // ✅ Send Email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Email Sending Error:", error);
        return res.status(500).json({ message: "Email sending failed", error });
      }

      console.log("✅ Email Sent: " + info.response);
      res.status(201).json({ message: "Mail saved and email sent successfully", id: result.insertId });
    });
  });
});

// ✅ Export for Vercel Serverless Function
module.exports = app;
module.exports.handler = serverless(app);
