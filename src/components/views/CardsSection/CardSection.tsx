import AppLink from "@/components/shared/AppLink/AppLink";
import { alpha, Box, Container, Grid2, Typography } from "@mui/material";
import { Cards } from "./data/cards";
import Card from "./Card";

const CardSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        backgroundColor: alpha("#1a1a1a", 0.6),
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #CCFF00",
        py: 8,
      }}
    >
      <Container>
        <Typography variant="h2">Also very important title</Typography>

        <Grid2 container spacing={4} sx={{ mt: 4 }}>
          {Cards.map((card) => (
            <Grid2 key={card.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card {...card} />
            </Grid2>
          ))}
        </Grid2>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 8 }}>
          <AppLink href="/contact-us">Contact us</AppLink>
        </Box>
      </Container>
    </Box>
  );
};

export default CardSection;
