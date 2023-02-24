import { Stack } from "@chakra-ui/react";
import React from "react";
import Nav from "../components/Nav/Nav";

export default function Layout({ children }) {
  return (
    <Stack mt={2} align={"center"}>
      <Nav />
      {children}
    </Stack>
  );
}
