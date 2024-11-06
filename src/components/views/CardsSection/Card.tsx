import { Paper, Typography } from "@mui/material";
import React from "react";
import { ICard } from "./data/cards";

const Card = ({ title, description }: ICard) => {
  return (
    <Paper elevation={4} component={"article"} sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ color: "secondary.main" }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default Card;
