"use client";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "56.25%", // 16:9
        height: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <ReactPlayer
        url={`https://youtu.be/${videoId}`}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          border: "2px solid #CCFF00",
        }}
      />
    </Box>
  );
};

export default YouTubeVideo;
