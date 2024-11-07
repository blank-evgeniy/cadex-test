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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 4,
        pt: 12,
        pb: 8,
      }}
    >
      <ContactForm />
    </Box>
  );
};

export default ContacUs;
