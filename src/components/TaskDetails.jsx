import { update } from "@/store/taskSlice";
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
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

// interface TaskDetailsProps {
//   title: string;
//   description: string;
//   deadline: string;
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
// }

const TaskDetails = ({
  id,
  title,
  description,
  deadline,
  isOpen,
  onOpen,
  onClose,
}) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  const dispatch = useDispatch();

  function handleSave() {
    dispatch(update({
      taskId: id,
      task: {
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        deadline: deadlineRef.current.value,
      }
    }))

    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} width="40%">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input ref={titleRef} defaultValue={title} width={"95%"} placeholder="Enter Task title" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              placeholder="Enter Task description here..."
              defaultValue={description}
              p={0}
              px={1}
              ref={descriptionRef}
            />
            <p>Deadline</p>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime"
              defaultValue={deadline}
              ref={deadlineRef}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="red" mr={3} onClick={handleSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskDetails;
