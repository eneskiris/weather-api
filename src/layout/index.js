import {Container, Stack} from "@chakra-ui/react";

export default function Layout({children}) {

    return (
        <Stack mt={2} align={"center"}>
            {children}
        </Stack>
    )
}