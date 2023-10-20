import { Button, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Push Note</Heading>
        </CardHeader>
        <CardBody>
          <Link href="https://pushnote-api-production.up.railway.app/api/v1/auth/sign_in_with_google">
            <Button colorScheme="blue">Sign In with Googles</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default login;
