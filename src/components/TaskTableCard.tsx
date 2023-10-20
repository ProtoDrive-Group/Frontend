import {
    Card,
    CardBody,
    Text
} from '@chakra-ui/react'
import React from "react"

export default function TaskTableCard() {
    return (
        <Card>
            <CardBody style={{ padding: 10 }}>
                <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
        </Card>
    )
}