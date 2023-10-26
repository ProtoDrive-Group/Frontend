import { Card, CardBody, Text } from "@chakra-ui/react"
import Link from "next/link"


export default function BoardCard({ board, href }) {
    return (
        <Link href={href}>
            <Card>
                <CardBody>
                    <Text>{board.title}</Text>
                </CardBody>
            </Card>
        </Link>
    )
}