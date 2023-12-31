import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: [
    {
      id: 1,
      title: 'Frontend setup',
      description: 'Setup the frontend',
      deadline: '2023-09-30T12:02',
    },
    {
      id: 2,
      title: 'Frontend Delpoyment',
      description: 'Deploy frontend on vercel',
      deadline: '2023-09-30T12:02',
    },
    {
      id: 3,
      title: 'Backend setup',
      description: 'Setup the backend using django',
      deadline: '2023-09-30T12:02',
    },
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add(state, action) {
      const payload = action.payload;
      const { task } = payload;

      state.results.push({
        id: state.results.length + 1,
        ...task,
      })
    },
    update(state, action) {
      const payload = action.payload;
      const { taskId, task } = payload;
      
      const requiredTask = state.results.find(task => task.id == taskId);
      requiredTask.deadline = task.deadline
      requiredTask.title = task.title
      requiredTask.description = task.description
    },
  },
})

export const {
  add,
  update
} = taskSlice.actions
export default taskSlice.reducer