"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button, Typography, Paper, styled } from "@mui/material";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  position: "relative",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey[400],
      transition: "border-color 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[200],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
      boxShadow: `0 0 4px ${theme.palette.secondary.light}`,
    },
    "&.Mui-error fieldset": {
      borderColor: theme.palette.error.main,
      boxShadow: `0 0 4px ${theme.palette.error.light}`,
    },
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    borderRadius: "4px",
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 0.7,
  },
}));

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
          <StyledTextField
            label="Name"
            variant="outlined"
            color="secondary"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name ? String(errors.name.message) : ""}
            margin="normal"
          />

          <StyledTextField
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

          <StyledTextField
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
