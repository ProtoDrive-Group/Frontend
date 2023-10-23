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
import TaskTableCard from './TaskTableCard.jsx'
import { useTaskListQuery } from '@/store/pushNoteApi.js'
import TaskDetails from './TaskDetails.jsx'

export default function TaskTable() {
  const { data: tasksData, isLoading } = useTaskListQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) return <div>Loading... </div>

  return (
    <Card
      style={{
        width: "284px",
      }}
    >
      <CardHeader style={{ padding: 10 }}>
        <Input
          className="w-96 bg-white shadow rounded"
          variant="unstyled"
          style={{
            paddingInline: "10px",
            fontWeight: "600",
            borderRadius: "4px",
            fontSize: "1.1rem",
            boxShadow: "none",
          }}
          _focus={{
            outline: "2px solid #3182ce",
          }}
          defaultValue="Frontend"
        />
      </CardHeader>
      <CardBody style={{ padding: 10 }}>
        <Stack>
          {tasksData.results.map((task) => (
            <TaskTableCard task={task} key={task.id} />
          ))}
        </Stack>
      </CardBody>
      <CardFooter style={{ padding: 10 }}>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          size={"sm"}
          onClick={onOpen}
        >
          Add Card
        </Button>
        <TaskDetails
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      </CardFooter>
    </Card>
  );
}
