import BoardCard from "@/components/BoardCard";
import { useBoardListQuery } from "@/store/pushNoteApi";
import { Container } from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function Board() {
    const router = useRouter();
    const { data: boardList, isLoading } = useBoardListQuery({ organizationCode: router.query.org });

    if (isLoading) return;

    return (
        <Container>
            {boardList.results.map(board => (
                <BoardCard
                    key={board.id}
                    board={board}
                    href={{
                        pathname: `/board/${board.id}`,
                        query: {
                            org: router.query.org
                        }
                    }}
                />
            ))}
        </Container>
    )
}