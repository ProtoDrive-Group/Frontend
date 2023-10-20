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
} from "@chakra-ui/react";
import AppNavBar from "@/components/AppNavBar";

const profile = () => {
  return (
    <>
      <AppNavBar />
      <div className="flex justify-center items-center my-3">
        <Card width={"50%"}>
          <CardHeader>
            <Heading size="md">User Profile</Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text>Profile Picture</Text>
              <Avatar
                size="2xl"
                name="Li Ling"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
              <Text>Name</Text>
              <Input value={"Li Ling"} placeholder="Name" size="sm" />
              <Text>Email</Text>
              <Input value={"LiLing@mail.com"} placeholder="Email" size="sm" />
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default profile;
