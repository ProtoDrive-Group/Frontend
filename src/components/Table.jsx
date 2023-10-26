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
import { useRouter } from 'next/router.js'
import TableTaskCreate from './TableTaskCreate.jsx';

export default function Table({ table, createTask }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      style={{
        width: "284px",
        height: 'min-content',
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
          defaultValue={table.title}
        />
      </CardHeader>
      <CardBody style={{ padding: 10 }}>
        <Stack>
          {table.tasks.map((task) => (
            <TaskTableCard
              task={task}
              key={task.id}
            />
          ))}

        </Stack>
      </CardBody>
      <CardFooter style={{ padding: 10 }}>
        {isOpen ?
          <TableTaskCreate onSubmit={(title) => createTask({ title })} onClose={onClose} /> :
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
            size={"sm"}
            onClick={onOpen}
          >
            Add Card
          </Button>
        }

      </CardFooter>
    </Card>
  );
}
