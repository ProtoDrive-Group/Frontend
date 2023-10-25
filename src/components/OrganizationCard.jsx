import { Card, CardBody, Text } from "@chakra-ui/react";

export default function OrganizationCard({ title }) {
    return (
        <Card>
            <CardBody>
                <Text textAlign={"center"}>
                    {title}
                </Text>
            </CardBody>
        </Card>
    )
}