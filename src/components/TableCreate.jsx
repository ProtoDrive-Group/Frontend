import { AddIcon } from "@chakra-ui/icons"
import {
    Button,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Card,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react"
import { useRef } from "react"

export default function TableCreate({ onCreate }) {
    const titleRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleSubmit(e) {
        e.preventDefault();
        onCreate(titleRef.current.value);
        onClose();
    }

    return (
        <>
            <Card style={{ width: "284px", height: 'min-content' }}>
                <Button
                    onClick={onOpen}
                    variant={"unstyled"}
                    leftIcon={<AddIcon />}
                    size={"md"}
                    color={'gray.500'}
                >Add another list</Button>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add List</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input placeholder="Please enter title of the list" autoFocus ref={titleRef}></Input>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} variant={'ghost'} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="teal" type="submit" onClick={handleSubmit}>Add List</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}