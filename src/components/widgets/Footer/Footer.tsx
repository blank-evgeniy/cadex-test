"use client";
import { alpha, Box, styled, Typography } from "@mui/material";

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  width: "100%",
  borderTop: `1px solid ${theme.palette.secondary.main}`,
  backdropFilter: "blur(12px)",
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.palette.primary.main,
  position: "fixed",
  bottom: 0,
}));

const Footer = () => {
  return (
    <Box component={"footer"}>
      <StyledFooter>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Some Company 2024
        </Typography>
      </StyledFooter>
    </Box>
  );
};

export default Footer;
