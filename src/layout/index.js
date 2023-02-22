import {Stack} from "@chakra-ui/react";
import Nav from "../components/Nav";

export default function Layout({children}) {

    return (
        <Stack mt={2} align={"center"}>
            <Nav/>
            {children}
        </Stack>
    )
}