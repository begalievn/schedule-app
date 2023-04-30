import {commonApi} from './common-api';

export const scheduleApi = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getSchedules: builder.query({
      query: ({ semester }) => ({
        url: `schedule?semester=${semester}`
      }),
    }),
    getScheduleById: builder.query({
      query: (id) => ({
        url: `schedule/${id}`,
      }),
    }),
    createSchedule: builder.mutation({
      query: (schedule) => ({
        url: `schedule`,
        method: 'POST',
        body: schedule,
      })
    })
  })
});

export const { useGetSchedulesQuery, useCreateScheduleMutation, useGetScheduleByIdQuery } = scheduleApi;
