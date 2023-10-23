import { useCreateTaskMutation, useUpdateTaskMutation } from "@/store/pushNoteApi";
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

  const dateWithoutOffset = deadline && new Date(deadline).toISOString().slice(0, -5);

  const [updateTask] = useUpdateTaskMutation();
  const [createTask] = useCreateTaskMutation();

  function handleSave() {
    if (id) {
      updateTask({
        taskId: id,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        deadline: deadlineRef.current.value,
      })
    } else {
      createTask({
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        deadline: deadlineRef.current.value,
      })
    }

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
              ref={descriptionRef}
            />
            <p>Deadline</p>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              defaultValue={dateWithoutOffset}
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
