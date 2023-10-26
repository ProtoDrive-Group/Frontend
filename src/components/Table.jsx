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
import { useRouter } from 'next/router.js'

export default function Table({ table }) {
  const router = useRouter();

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
        <Button
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          size={"sm"}
          onClick={() => {
            router.push({
              pathname: router.pathname,
              query: {
                ...router.query,
                taskId: 'new',
              }
            })
          }}
        >
          Add Card
        </Button>
      </CardFooter>
    </Card>
  );
}
