import AppNavBar from "@/components/AppNavBar";
import { Container } from "@chakra-ui/react";

export default function DefaultLayout({ children }) {
    return (
        <>
            <AppNavBar/>
            {children}
        </>
    )
}