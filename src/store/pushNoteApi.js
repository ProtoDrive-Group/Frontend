// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pushNoteApi = createApi({
  reducerPath: 'pushNoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pushnote-api-production.up.railway.app/api/v1' }),
  endpoints: (builder) => ({
    taskList: builder.query({
      query: () => `/tasks`,
    }),
    taskById: builder.query({
      query: (taskId) => `/tasks/${taskId}`
    }),
    createTask: builder.mutation({
      query: ({ title, description, deadline, members }) => ({
        url: '/tasks',
        method: 'POST',
        body: {
          title,
          description,
          deadline,
          members,
        }
      })
    }),
    updateTask: builder.mutation({
      query: (taskId, { title, description, deadline, members }) => ({
        url: `/tasks/${taskId}`,
        method: 'PUT',
        body: {
          title,
          description,
          deadline,
          members,
        }
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useTaskListQuery,
  useTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = pushNoteApi