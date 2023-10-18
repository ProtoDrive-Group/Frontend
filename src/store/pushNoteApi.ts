// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pushNoteApi = createApi({
  reducerPath: 'pushNoteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://baseurl/api/v1' }),
  endpoints: (builder) => ({

  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { } = pushNoteApi