// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'universal-cookie'
import { AUTH } from '@/constants/main';

export const pushNoteApi = createApi({
  reducerPath: 'pushNoteApi',
  tagTypes: ['board', 'table', 'member', 'organization', 'task' ],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pushnote-api-production.up.railway.app/api/v1',
    prepareHeaders: (headers) => {
      const cookies = new Cookies(null, { 
        path: '/',
        maxAge: 34560000,
      })
      headers.set('authorization',
        `Bearer ${cookies.get(AUTH.SESSION_TOKEN)}`
      )
      return headers
    }
  }),
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ 
        title, 
        description, 
        deadline, 
        members = [], 
        tableId, 
        organizationCode, 
        boardId 
      }) => ({
        url: `/board/${boardId}/create_task/`,
        params: {
          org_code: organizationCode,
        },
        method: 'POST',
        body: {
          title,
          description,
          deadline,
          members,
          table_id: tableId,
        }
      }),
      invalidatesTags: ['board']
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
      }),
      invalidatesTags: ['board']
    }),
    userList: builder.query({
      query: () => `/users/`,
    }),
    selfUser: builder.query({
      query: () => '/user/self/',
    }),
    organizationList: builder.query({
      query: () => `/organization/`,
      providesTags: ['organization'],
    }),
    boardList: builder.query({
      query: ({ organizationCode }) => ({
        url: `/board/`,
        params: {
          org_code: organizationCode,
        }
      }),
      providesTags: ['board'],
    }),
    boardDetail: builder.query({
      query: ({ boardId, organizationCode }) => ({
        url: `/board/${boardId}/detail_board/`,
        params: {
          org_code: organizationCode,
        }
      }),
      providesTags: ['board']
    }),
    createTable: builder.mutation({
      query: ({ boardId, organizationCode, title }) => ({
        url: `/board/${boardId}/create_table/`,
        params: {
          org_code: organizationCode,
        },
        body: {
          title,
        },
        method: 'POST',
      }),
      invalidatesTags: ['board'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUserListQuery,

  useSelfUserQuery,
  useLazySelfUserQuery,

  useOrganizationListQuery,

  useBoardListQuery,
  useBoardDetailQuery,

  useCreateTableMutation,
} = pushNoteApi