"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button, Typography, Paper } from "@mui/material";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [responseMessage, setResponseMessage] = useState<string>("");

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    setResponseMessage(result.message);
  };

  if (responseMessage)
    return (
      <Typography
        variant="h1"
        sx={{
          maxWidth: 420,
          textAlign: "center",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        {responseMessage}
      </Typography>
    );

  return (
    <>
      <Typography
        variant="h1"
        sx={{ textAlign: "center", fontSize: { xs: "1.5rem", md: "2.5rem" } }}
      >
        Only CTA on the page
      </Typography>
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          backgroundColor: "background.default",
          border: "1px solid",
          borderColor: "secondary.main",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            color="secondary"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name ? String(errors.name.message) : ""}
            margin="normal"
          />

          <TextField
            label="Email"
            variant="outlined"
            color="secondary"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? String(errors.email.message) : ""}
            margin="normal"
          />

          <TextField
            label="Message"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            {...register("message", { required: "Message is required" })}
            error={!!errors.message}
            helperText={errors.message ? String(errors.message.message) : ""}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            style={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default ContactForm;
