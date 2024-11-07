"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

import React from "react";

const animate = keyframes`
    0% {
        transform: translateX(-10vw) scale(0);

    },
  
    100% {
        transform: translateX(110vw) scale(1);
    }
`;

const Bubble = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  background: #ccff00;
  border-radius: 100%;
  box-shadow: 0 0 4px #ccff0044, 0 0 50px #ccff00, 0 0 100px #ccff00;
  animation: ${animate} 1s linear infinite;
`;

const Background = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "background.default",
        zIndex: -2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Bubble style={{ animationDuration: "4s" }} />
        <Bubble style={{ animationDuration: "6s" }} />
        <Bubble style={{ animationDuration: "7.5s" }} />
        <Bubble style={{ animationDuration: "3.2s" }} />
        <Bubble style={{ animationDuration: "9.5s" }} />
        <Bubble style={{ animationDuration: "6.3s" }} />
        <Bubble style={{ animationDuration: "8.7s" }} />
        <Bubble style={{ animationDuration: "5.5s" }} />
        <Bubble style={{ animationDuration: "7.5s" }} />
        <Bubble style={{ animationDuration: "9.5s" }} />
        <Bubble style={{ animationDuration: "6.4s" }} />
        <Bubble style={{ animationDuration: "7.8s" }} />
        <Bubble style={{ animationDuration: "8.1s" }} />
      </Box>
    </Box>
  );
};

export default Background;
