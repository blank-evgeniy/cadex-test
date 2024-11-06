import AppLink from "@/components/shared/AppLink/AppLink";
import NextLink from "next/link";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky" sx={{ height: 60 }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link component={NextLink} href="/" color="secondary">
              Some Company
            </Link>
          </Typography>
          <AppLink size="small" href="/contact-us">
            Contact us
          </AppLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
