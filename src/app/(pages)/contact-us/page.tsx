import ContactForm from "@/components/views/ContactForm/ContactForm";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Some Copmany",
};

const ContacUs = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 60px - 40px)",
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <ContactForm />
    </Box>
  );
};

export default ContacUs;
