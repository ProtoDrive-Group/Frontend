import Table from "@/components/Table";
import TaskDetails from "@/components/TaskDetails";
import { useBoardDetailQuery } from "@/store/pushNoteApi";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router"


export default function BoardDetail() {
    const router = useRouter();
    const { org, boardId, taskId } = router.query;

    const { data: boardDetail, isLoading } = useBoardDetailQuery({ organizationCode: org, boardId })
    if (isLoading) return;

    const taskDetail = getTaskDetail(taskId, boardDetail.tables)

    return (
        <>
            <Stack>
                {boardDetail.tables.map(table => (
                    <Table
                        table={table}
                        key={table.id}
                    />
                ))}
            </Stack>
            {taskDetail ?
                <TaskDetails 
                    task={taskDetail}
                    onClose={() => {
                        const newQuery = router.query;
                        delete newQuery['taskId']

                        router.replace({
                            query: newQuery
                        })
                    }}
                />:
                null
            }
        </>
    )
}


function getTaskDetail(taskId, tables) {
    if (!taskId) return;
    if (taskId == 'new') return {};

    let result;
    tables.forEach(table => {
        table.tasks.forEach(task => {
            if (taskId == task.id) result = task
        })
    })

    return result;
}