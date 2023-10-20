import { Stack } from "@chakra-ui/react";
import AppNavBar from "@/components/AppNavBar";
import TaskTable from "@/components/TaskTable";

export default function Home() {
  return (
    <>
      <AppNavBar />
      <Stack direction="row">
        <TaskTable />
        <TaskTable />
      </Stack>
    </>
  );
}
