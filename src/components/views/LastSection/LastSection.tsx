import { routes } from "@/app/config/routes";
import AppLink from "@/components/shared/AppLink/AppLink";
import { Stack, Typography } from "@mui/material";

const LastSection = () => {
  return (
    <Stack
      direction={"column"}
      component={"section"}
      sx={{
        textAlign: "center",
        py: 12,
      }}
    >
      <Typography sx={{ pb: 6 }} variant="h3">
        Less important title
      </Typography>
      <AppLink href={routes.PUBLIC.CONTACT_US}>Contact us</AppLink>
    </Stack>
  );
};

export default LastSection;
