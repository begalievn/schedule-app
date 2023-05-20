import {commonApi} from './common-api';

export const groupApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => ({
        url: `group`
      }),
    }),
    createGroup: builder.mutation({
      query: (body) => ({
        url: `group`,
        method: 'POST',
        body: body,
      })
    }),
    getGroupById: builder.query({
      query: (id) => ({
        url: `group/${id}`
      })
    }),
    updateGroup: builder.mutation({
      query: ({ id, body }) => ({
        url: `group/${id}`,
        method: 'PATCH',
        body: body,
      })
    }),
    deleteGroupById: builder.mutation({
      query: (id) => ({
        url: `group/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const { useGetGroupsQuery, useCreateGroupMutation, useGetGroupByIdQuery, useUpdateGroupMutation, useDeleteGroupByIdMutation } = groupApi;
