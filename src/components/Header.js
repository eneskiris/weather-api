import img from '../img/sunny.jpg'
import {Box, Button, Stack, Text} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import AddCityDrawer from "./AddCityDrawer";

export function Header() {
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
                <Text color={"white"} as={"b"} fontSize='2xl'>Şehir seçerek hava durumunu öğrenebilirsiniz.</Text>
                <Text color={"white"} fontSize='xl'>Şehirini seç ve hava durumunu öğren.</Text>
            </Box>
            <Box width={"50%"}>
                <AddCityDrawer/>
            </Box>
        </Stack>
    );
}