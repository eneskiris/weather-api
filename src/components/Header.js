import img from '../img/sunny.jpg'
import {Box, Stack, Text} from "@chakra-ui/react";

export function Header({h1,h2,drawer}:{ h1: string, h2: string, drawer: React.ReactNode }){
    return (
        <Stack
            style={{
            width: "100%",
            height: "40vh",
            backgroundImage:  `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
            justifyContent={"center"}
            alignItems={"center"}
            gap={3}
        >
            <Box width={"50%"}>
                <Text color={"white"} as={"b"} fontSize='2xl'>{h1}</Text>
                <Text color={"white"} fontSize='xl'>{h2}</Text>
            </Box>
            <Box width={"50%"}>
                {drawer}
            </Box>
        </Stack>
    );
}