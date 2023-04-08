import {commonApi} from './common-api';
import {subjectApi} from './subject-api';

export const scheduleApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query({
      query: ({ semester }) => ({
        url: `schedule?semester=${semester}`
      }),
    }),
  })
});

export const { useGetSchedulesQuery } = subjectApi;
