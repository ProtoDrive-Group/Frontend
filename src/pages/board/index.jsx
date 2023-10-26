import { useBoardDetailQuery } from "@/store/pushNoteApi";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function Board() {
    const router = useRouter();
    const { data } = useBoardDetailQuery({ organizationId: router.query.org });

    return (
        <Container>
            
        </Container>
    )
}