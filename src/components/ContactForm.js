import React, { useState } from "react";
import { TextField, Button, Stack, Typography, Grid } from "@mui/material";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("sendEmail.php", formData)
      .then((response) => alert("Message sent successfully!"))
      .catch((error) => alert("Failed to send message."));
  };

  return (
    <Stack sx={{ marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={0} columnSpacing={{ md: 3 }}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
            />
          </Grid>
        </Grid>
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          variant="filled"
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Stack>
  );
};

export default ContactForm;
