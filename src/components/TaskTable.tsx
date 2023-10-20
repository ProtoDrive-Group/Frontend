import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Stack,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import TaskTableCard from './TaskTableCard.jsx'

export default function TaskTable() {
    return (
        <Card
            style={{
                width: '284px',
            }}
        >
            <CardHeader
                style={{ padding: 10 }}
            >
                <Input
                    className='w-96 bg-white shadow rounded'
                    variant='unstyled'
                    style={{
                        paddingInline: '10px',
                        fontWeight: '500',
                        borderRadius: '4px',
                        fontSize: '1.1rem',
                        boxShadow: 'none',
                    }}
                    _focus={{
                        outline: '2px solid #3182ce'
                    }}
                    value='Frontend'
                />
            </CardHeader>
            <CardBody style={{ padding: 10 }}>
                <Stack>
                    <TaskTableCard task={{ title: 'Setup frontend', taskId: '1' }} />
                    <TaskTableCard task={{ title: 'Create Goal', taskId:'2' }}/>
                </Stack>
            </CardBody>
            <CardFooter style={{ padding: 10 }}>
                <Button
                    leftIcon={<AddIcon />}
                    colorScheme='teal'
                    variant='solid'
                    size={'sm'}
                >
                    Add Card
                </Button>
            </CardFooter>
        </Card>
    )
}
