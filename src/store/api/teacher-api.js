import { commonApi } from './common-api';

export const teacherApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeacher: builder.query({
      query: (search) => ({
        url: `teacher/search?search=${search}`,
      }),
    }),
    createTeacher: builder.mutation({
      query: (body) => ({
        url: `teacher`,
        method: 'POST',
        body: body,
      })
    }),
    updateTeacher: builder.mutation({
      query: ({id,  ...body }) => {
        console.log('body', body.body);
        return {
          url: `teacher/${id}`,
          method: 'PATCH',
          body: body.body,
        }
        
      },
    }),
    getTeacherById: builder.query({
      query: (id) => ({
        url: `teacher/${id}`
      })
    }),
    deleteTeacherById: builder.mutation({
      query: (id) => ({
        url: `teacher/${id}`,
        method: 'DELETE'
      })
    }),
  }),
});

export const { useGetAllTeacherQuery, useGetTeacherByIdQuery, useCreateTeacherMutation, useUpdateTeacherMutation, useDeleteTeacherByIdMutation } = teacherApi;
