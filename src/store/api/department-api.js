import {commonApi} from './common-api';

export const departmentApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: `department`
      })
    }),
  }),
});

export const { useGetDepartmentsQuery } = departmentApi;
