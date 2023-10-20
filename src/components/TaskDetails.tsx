import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";

interface TaskDetailsProps {
  title: string;
  description: string;
  deadline: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const TaskDetails = ({
  title,
  description,
  deadline,
  isOpen,
  onOpen,
  onClose,
}: TaskDetailsProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {description}
            <p>Deadline: {deadline}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskDetails;
