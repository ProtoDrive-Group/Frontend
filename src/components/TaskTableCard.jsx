import {
    Card,
    CardBody,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import React from "react"
import TaskDetails from './TaskDetails';

export default function TaskTableCard({ task }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Card>
            <CardBody style={{ padding: 10 }} onClick={onOpen}>
                <Text>{task.title}</Text>
            </CardBody>
            <TaskDetails
                title={task.title}
                description={task.description}
                deadline={new Date(task.deadline)}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </Card>
    )
}