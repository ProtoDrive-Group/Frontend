import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: [
    {
      title: 'Frontend setup',
      description: 'Setup the frontend',
      deadline: '22nd Oct',
    },
    {
      title: 'Frontend Delpoyment',
      description: 'Deploy frontend on vercel',
      deadline: '22nd Oct',
    },
    {
      title: 'Backend setup',
      description: 'Setup the backend using django',
      deadline: '22nd Oct',
    },
  ]
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add(state, action) {
      const payload = action.payload;

    },
    update(state, action) {
      const payload = action.payload;
      
    },
  },
})

export const {
  add,
  update
} = taskSlice.actions
export default taskSlice.reducer