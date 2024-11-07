"use client";
import AppLink from "@/components/shared/AppLink/AppLink";
import NextLink from "next/link";
import {
  alpha,
  AppBar,
  Container,
  Link,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: "8px",
  backdropFilter: "blur(12px)",
  border: "1px solid",
  borderColor: theme.palette.secondary.main,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.palette.primary.main,
  padding: "8px 12px",
}));

const Header = () => {
  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: "16px",
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link component={NextLink} href="/">
              Some Company
            </Link>
          </Typography>
          <AppLink size="small" href="/contact-us">
            Contact us
          </AppLink>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
