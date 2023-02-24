import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

export function Header({ h1, h2, drawer }) {
  return (
    <Stack className={styles.stack} gap={3}>
      <Box className={styles.box}>
        <Text className={styles.text} as={"b"} fontSize="2xl">
          {h1}
        </Text>
        <Text className={styles.text} fontSize="xl">
          {h2}
        </Text>
      </Box>
      <Box className={styles.box}>{drawer}</Box>
    </Stack>
  );
}
