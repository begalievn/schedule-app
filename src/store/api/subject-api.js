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
  }),
});

export const { useCreateSubjectMutation } = subjectApi;
