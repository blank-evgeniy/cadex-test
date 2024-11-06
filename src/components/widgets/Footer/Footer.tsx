import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        backgroundColor: "primary.main",

        position: "sticky",
        bottom: 0,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Some Company 2024
      </Typography>
    </Box>
  );
};

export default Footer;
