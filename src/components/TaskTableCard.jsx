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
            {isOpen ?
                <TaskDetails
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    deadline={task.deadline}
                    isOpen={true}
                    onOpen={onOpen}
                    onClose={onClose}
                /> :
                null
            }
        </Card>
    )
}