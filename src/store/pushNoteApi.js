// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pushNoteApi = createApi({
  reducerPath: 'pushNoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pushnote-api-production.up.railway.app/api/v1',
    prepareHeaders: (headers) => {
      headers.set('authorization',
        `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MjQ3MTM0LCJpYXQiOjE2OTc4MTUxMzQsImp0aSI6IjRjZjM3Y2JkYmYzMzRhNWU5OTQ4M2EwODljZDlhYzYzIiwidXNlcl9pZCI6IjljMjRmZjJhLTM4MDMtNGYzMy1hM2YyLTNhZjE5MTRhYWE2YyJ9.d4w4zUcp5Bx64-qUYGhaE_pakx7Wt2l5hFvtI6kU7tA`
      )

      return headers
    }
  }),
  endpoints: (builder) => ({
    taskList: builder.query({
      query: () => `/tasks/`,
    }),
    taskById: builder.query({
      query: (taskId) => `/tasks/${taskId}/`
    }),
    createTask: builder.mutation({
      query: ({ title, description, deadline, members = [] }) => ({
        url: '/tasks/',
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
      query: ({ taskId, title, description, deadline, members = [] }) => ({
        url: `/tasks/${taskId}/`,
        method: 'PUT',
        body: {
          title,
          description,
          deadline,
          members,
        }
      })
    }),
    userList: builder.query({
      query: () => `/users/`,
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
  useUserListQuery,
} = pushNoteApi