import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const testimonials = [
  {
    name: "John Doe",
    testimonial: "This service is fantastic! Highly recommend to anyone.",
  },
  {
    name: "Jane Smith",
    testimonial: "Exceptional experience, the team was incredibly helpful.",
  },
  {
    name: "Sam Wilson",
    testimonial: "A+ service and support. I will definitely use it again.",
  },
];

const Testimonials = () => (
  <>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body3">{item.testimonial}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <br />
  </>
);

export default Testimonials;
