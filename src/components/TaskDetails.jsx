import { useCreateTaskMutation, useUpdateTaskMutation, useUserListQuery } from "@/store/pushNoteApi";
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
  Select,
  FormControl,
  FormLabel,
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
  const { data: userList, isLoading: isUserListLoading } = useUserListQuery();

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
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {id ?
            "Update Task":
            "Create Task"
          }
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>

          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input ref={titleRef} defaultValue={title} placeholder="Enter Task title" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Input ref={descriptionRef} defaultValue={description} placeholder="Enter description here.." />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Deadline</FormLabel>
            <Input
              placeholder="Select Date and Time"
              type="datetime-local"
              defaultValue={dateWithoutOffset}
              ref={deadlineRef}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Assigned To</FormLabel>
            <Select placeholder='Select option'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TaskDetails;
