import {
    Card,
    CardBody,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import React from "react"
import TaskDetails from './TaskDetails';
import { useRouter } from 'next/router';

export default function TaskTableCard({ task }) {
    const router = useRouter();

    return (
        <Card>
            <CardBody 
                style={{ padding: 10 }} 
                onClick={() => {
                    router.push({
                        pathname: router.pathname,
                        query: {
                            ...router.query,
                            taskId: task.id,
                        }
                    });
                }}
            >
                <Text>{task.title}</Text>
            </CardBody>
        </Card>
    )
}