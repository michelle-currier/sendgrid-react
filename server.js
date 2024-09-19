const express = require("express");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5002;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
// app.use(
//   cors({
//     // origin: "https://react-contact-template.vercel.app", // Allow requests from your frontend
//     // origin: "https://react.mcurrier.com",
//     origin: "localhost:3001",
//     methods: ["POST"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use(express.json());

app.post("/send-email", (req, res) => {
  const { from_name, email, telephone, message } = req.body;

  const emailContent = {
    to: "mcurrierdesigns@gmail.com",
    from: "React.mcurrier.com",
    subject: "Contact Form Submission",
    text: `You have a new message from ${from_name} (${email}, ${telephone}): ${message}`,
    html: `<h1>Message from ${from_name}</h1><p>Email: ${email}</p><p>Phone: ${telephone}</p><p>Message: ${message}</p>`,
  };

  sgMail
    .send(emailContent)
    .then(() => res.status(200).json({ success: true, message: "Email sent!" }))
    .catch((error) =>
      res.status(500).json({ success: false, message: error.message })
    );
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
