import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  Input,
} from "@chakra-ui/react";
import React from "react";

// interface TaskDetailsProps {
//   title: string;
//   description: string;
//   deadline: string;
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
// }

const TaskDetails = ({
  title,
  description,
  deadline,
  isOpen,
  onOpen,
  onClose,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} width="40%">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input value={title} width={"95%"} placeholder="Enter Task title" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Enter Task description here..."
              value={description}
              p={0}
              px={1}
            />
            <p>Deadline</p>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime"
              value={deadline}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskDetails;
