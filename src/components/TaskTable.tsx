import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
    Stack,
    useDisclosure,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import TaskTableCard from './TaskTableCard'
import TaskDetails from '@/components/TaskDetails'

export default function TaskTable() {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
                    <TaskTableCard />
                    <TaskTableCard />
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
            <TaskDetails
                title="Build user page"
                description={"On progress bl;ahjisdfjaksdrasdnkakd"}
                deadline={"2023-10-23T23:59:00+05:30"}
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
            />
        </Card>
    )
}
