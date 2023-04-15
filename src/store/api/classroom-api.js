import {commonApi} from './common-api';

export const classroomApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getClassrooms: builder.query({
      query: () => ({
        url: 'classroom'
      }),
    }),
  }),
});

export const { useGetClassroomsQuery } = classroomApi;
