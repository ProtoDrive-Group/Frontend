import OrganizationCard from "@/components/OrganizationCard";
import { useOrganizationListQuery } from "@/store/pushNoteApi";
import { Box, Container, Flex } from "@chakra-ui/react";

export default function Organization() {
    const { data: organizations, isLoading } = useOrganizationListQuery();

    if (isLoading) return;

    return (
        <Container>
            <Flex style={{ flexWrap: 'wrap', justifyContent: 'space-around', gap: '10px' }}>
                {organizations.map(organization => (
                    <Box 
                        key={organization.id}
                        style={{
                            width: 'clamp(200px, 100%, 230px)'
                        }}
                    >
                        <OrganizationCard
                            organization={organization}
                        />
                    </Box>
                ))}
            </Flex>
        </Container>
    )
}