import { commonApi } from './common-api';

export const subjectApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    createSubject: builder.mutation({
      query: (body) => ({
        url: 'subject',
        method: 'POST',
        body,
      }),
    }),
    getSubjectsFiltered: builder.query({
      query: ({ semester, course }) => ({
        url: `subject/filtered?semester=${semester}&course=${course}`
      })
    }),
  }),
});

export const { useCreateSubjectMutation, useGetSubjectsFilteredQuery, useLazyGetSubjectsFilteredQuery } = subjectApi;
