import React, { useRef, useState } from "react";

import { Box, Typography, Button, TextField } from "@mui/material";

// function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const formData = new FormData(form.current);
//     const data = {
//       from_name: formData.get("from_name"),
//       email: formData.get("email"),
//       telephone: formData.get("telephone"),
//       message: formData.get("message"),
//     };
//     // fetch("http://react.mcurrier.com/send-email", {
//     fetch("http://localhost:5002/send-email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         if (result.success) {
//           setStatus("Email sent successfully!");
//         } else {
//           setStatus("Error sending email, debug more.");
//         }
//       })
//       .catch((error) => {
//         console.error(
//           "error sending email:",
//           error.response ? error.response.body : error.message
//         );
//       });
//   };

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      from_name: formData.get("from_name"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      message: formData.get("message"),
    };

    fetch("http://localhost:5001/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setStatus("Email sent successfully!");
        } else {
          setStatus("Error sending email, debug more.");
        }
      })
      .catch((error) => {
        console.error(
          "error sending email:",
          error.response ? error.response.body : error.message
        );
      });
  };

  return (
    <>
      {/* with mui */}

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        sx={{ maxWidth: 600, mx: "auto", mt: 5 }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us!
        </Typography>
        <TextField
          label="Name"
          name="from_name"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="telephone"
          type="tel"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        {status && (
          <div className="alert alert-info text-center">
            <p>{status}</p>
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          value="Send"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </>
  );
}

export default Contact;
