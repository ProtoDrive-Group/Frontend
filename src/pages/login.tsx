import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Push Note</Heading>
        </CardHeader>
        <CardBody>
          <Button colorScheme="blue">Sign In with Googles</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default login;
