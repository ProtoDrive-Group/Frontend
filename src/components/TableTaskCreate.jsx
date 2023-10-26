import { Button, Card, CardBody, CardFooter, FormControl, Input } from "@chakra-ui/react";
import { useRef } from "react";

export default function TableTaskCreate({ onSubmit, onClose }) {
    const titleRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(titleRef.current.value);
        onClose();
    }
    return (
        <Card variant={"unstyled"}>
            <CardBody >
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <Input placeholder="Enter a title for this card" ref={titleRef} autoFocus onBlur={onClose}></Input>
                    </FormControl>
                </form>
            </CardBody>

            <CardFooter p={2}>
                <Button colorScheme="teal" type="submit" onClick={handleSubmit} size={"sm"}>Add Card</Button>
                <Button ml={3} variant={'ghost'} onClick={onClose} size={"sm"}>
                    Close
                </Button>
            </CardFooter>
        </Card>
    )
}