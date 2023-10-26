import Table from "@/components/Table";
import TableCreate from "@/components/TableCreate";
import TaskDetails from "@/components/TaskDetails";
import { useBoardDetailQuery, useCreateTableMutation, useCreateTaskMutation } from "@/store/pushNoteApi";
import { Stack } from "@chakra-ui/react";
import { useRouter } from "next/router"


export default function BoardDetail() {
    const router = useRouter();
    const { org, boardId, taskId } = router.query;

    const { data: boardDetail, isLoading } = useBoardDetailQuery({ organizationCode: org, boardId })
    const [createTable] = useCreateTableMutation();
    const [createTask] = useCreateTaskMutation();
    if (isLoading) return;

    const taskDetail = getTaskDetail(taskId, boardDetail.tables)

    return (
        <>
            <Stack direction={'row'}>
                {boardDetail.tables.map(table => (
                    <Table
                        table={table}
                        key={table.id}
                        createTask={({ title, description, members, deadline }) => {
                            console.log(title, description)
                            createTask({
                                title,
                                description,
                                members,
                                deadline,
                                organizationCode: org,
                                boardId,
                                tableId: table.id,
                            })
                        }}
                    />
                ))}
                <TableCreate onCreate={(title) => createTable({ title, organizationCode: org, boardId })}/>
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