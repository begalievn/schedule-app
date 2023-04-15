import {commonApi} from './common-api';

export const scheduleApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query({
      query: ({ semester }) => ({
        url: `schedule?semester=${semester}`
      }),
    }),
  })
});

export const { useGetSchedulesQuery } = scheduleApi;
