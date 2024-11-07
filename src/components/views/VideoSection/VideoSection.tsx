"use client";
import { Box, Container, Grid2, Typography } from "@mui/material";
import YouTubeVideo from "../../widgets/YouTubeVideo/YouTubeVideo";

const VideoSection = () => {
  return (
    <Box
      component={"section"}
      sx={{
        py: { xs: 10, md: 16 },
        borderBottom: "1px solid #CCFF00",
      }}
    >
      <Container>
        <Grid2 container spacing={4} sx={{ alignItems: "center" }}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h1">
              Most important title on the page
            </Typography>
            <Typography sx={{ pt: 2 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              rerum deserunt illo alias dolorem. Molestiae odio fugiat dolore
              doloremque facilis officia unde magni voluptate commodi incidunt
              repellendus laborum, illo perferendis!
            </Typography>
          </Grid2>

          <Grid2
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            size={{ xs: 12, md: 6 }}
          >
            <YouTubeVideo videoId="dQw4w9WgXcQ" />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default VideoSection;
