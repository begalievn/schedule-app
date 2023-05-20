import {commonApi} from './common-api';

export const classroomApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getClassrooms: builder.query({
      query: () => ({
        url: 'classroom'
      }),
    }),
    createClassroom: builder.mutation({
      query: (body) => ({
        url: 'classroom',
        method: 'POST',
        body: body,
      })
    }),
    getClassroomById: builder.query({
      query: (id) => ({
        url: `classroom/${id}`
      })
    }),
    updateClassroom: builder.mutation({
      query: ({ id, body }) => ({
        url: `classroom/${id}`,
        method: 'PATCH',
        body: body,
      })
    }),
    deleteClassroom: builder.mutation({
      query: (id) => ({
        url: `classroom/${id}`,
        method: 'DELETE',
      })
    })
  }),
});

export const {
  useGetClassroomsQuery,
  useCreateClassroomMutation,
  useGetClassroomByIdQuery,
  useUpdateClassroomMutation,
  useDeleteClassroomMutation,
} = classroomApi;
