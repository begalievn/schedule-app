import { commonApi } from './common-api';

export const teacherApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeacher: builder.query({
      query: () => ({
        url: 'teacher',
      }),
    }),
  }),
});

export const { useGetAllTeacherQuery } = teacherApi;
