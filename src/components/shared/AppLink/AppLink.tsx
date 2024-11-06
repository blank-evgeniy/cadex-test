"use client";
import { Button, SxProps } from "@mui/material";
import NextLink from "next/link";

interface AppLinkProps {
  children: React.ReactNode;
  href: string;
  size?: "small" | "medium" | "large";
  sx?: SxProps;
}

const AppLink = ({ children, href, size = "medium", sx }: AppLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Button color="secondary" variant="contained" size={size} sx={sx}>
        {children}
      </Button>
    </NextLink>
  );
};

export default AppLink;
