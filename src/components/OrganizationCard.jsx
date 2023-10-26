import { Card, CardBody, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function OrganizationCard({ organization, href }) {
    return (
        <Link href={href}>
            <Card>
                <CardBody>
                    <Text textAlign={"center"}>
                        {organization.title}
                    </Text>
                </CardBody>
            </Card>
        </Link>
    )
}