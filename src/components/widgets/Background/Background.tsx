"use client";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

import React from "react";

const animate = keyframes`
    0% {
        transform: translateY(100vh) scale(0);

    }
    100% {
        transform: translateY(-20vh) scale(1);
    }
`;

const Bubble = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  background: #ccff00;
  border-radius: 100%;
  box-shadow: 0 0 10px #ccff0044, 0 0 50px #ccff00, 0 0 100px #ccff00;
  animation: ${animate} 15s linear infinite;
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
        }}
      >
        <Bubble style={{ animationDuration: "2s" }} />
        <Bubble style={{ animationDuration: "3s" }} />
        <Bubble style={{ animationDuration: "2.5s" }} />
        <Bubble style={{ animationDuration: "2s" }} />
        <Bubble style={{ animationDuration: "3.5s" }} />
        <Bubble style={{ animationDuration: "3s" }} />
        <Bubble style={{ animationDuration: "2s" }} />
        <Bubble style={{ animationDuration: "1.5s" }} />
        <Bubble style={{ animationDuration: "4s" }} />
        <Bubble style={{ animationDuration: "3.5s" }} />
        <Bubble style={{ animationDuration: "2.5s" }} />
        <Bubble style={{ animationDuration: "2s" }} />
        <Bubble style={{ animationDuration: "3s" }} />
        <Bubble style={{ animationDuration: "4s" }} />
        <Bubble style={{ animationDuration: "5s" }} />
        <Bubble style={{ animationDuration: "4.5s" }} />
        <Bubble style={{ animationDuration: "2.5s" }} />
      </Box>
    </Box>
  );
};

export default Background;
