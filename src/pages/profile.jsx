import { useSelfUserQuery } from "@/store/pushNoteApi";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
  Input,
  Stack,
  Avatar,
  Container,
} from "@chakra-ui/react";

const profile = () => {
  const { data: user, isLoading } = useSelfUserQuery();

  if (isLoading) return;

  return (
    <Container marginBlock={10}>
      <Card>
        <CardHeader>
          <Heading size="md">User Profile</Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <Text>Profile Picture</Text>
            <Avatar
              size="2xl"
              name={user.name}
              src={user.picture}
            />
            <Text>Name</Text>
            <Input defaultValue={user.name} placeholder="Name" size="sm" readOnly/>
            <Text>Email</Text>
            <Input defaultValue={user.email} placeholder="Email" size="sm" readOnly/>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default profile;
