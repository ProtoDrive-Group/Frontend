import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Button,
} from '@chakra-ui/react'
import { AddIcon} from '@chakra-ui/icons'
import TaskTableCard from './TaskTableCard'

export default function TaskTable() {
    return (
        <Card
            style={{
                width: '284px'
            }}
        >
            <CardHeader>
                <Input
                    className='w-96 bg-white shadow rounded'
                    variant='unstyled'
                    style={{
                        paddingInline: '10px',
                        fontWeight: '500',
                        borderRadius: '4px',
                        fontSize: '1.1rem',
                    }}
                    _focus={{
                        outline: '2px solid #3182ce'
                    }}
                    value='Frontend'
                />
            </CardHeader>
            <CardBody>
                <TaskTableCard />
            </CardBody>
            <CardFooter>
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