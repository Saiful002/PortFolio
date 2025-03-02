const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.error("❌ Database connection failed:", err);
    } else {
      console.log("✅ MySQL Connected...");
    }
  });

  const transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail or your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email for authentication
      pass: process.env.EMAIL_PASS, // App password or email password
    },
  });

app.get('/',(req,res)=>{
  res.json("Hello")
})

  app.post("/send-mail", (req, res) => {
    const { yourmail, body } = req.body;
  
    if (!yourmail || !body) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    // Insert into Database
    const sql = "INSERT INTO mails (yourmail, body) VALUES (?, ?)";
    db.query(sql, [yourmail, body], (err, result) => {
      if (err) {
        console.error("Error inserting mail:", err);
        return res.status(500).json({ message: "Database error", error: err });
      }
  
      // Dynamic Sender Email Setup
      const mailOptions = {
        from: yourmail, // The sender's email from input
        to: process.env.RECEIVER_EMAIL, // Your email to receive messages
        subject: "New Message from Contact Form",
        text: `You received a new message from: ${yourmail}\n\nMessage:\n${body}`,
        replyTo: yourmail, // This allows you to reply directly to the sender
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "Email sending failed", error });
        }
  
        console.log("Email sent: " + info.response);
        res.status(201).json({ message: "Mail saved and email sent successfully", id: result.insertId });
      });
    });
  });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  