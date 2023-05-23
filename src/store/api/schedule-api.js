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
    }),
    updateSchedule: builder.mutation({
      query: ({ id, body }) => ({
        url: `schedule/${id}`,
        method: 'PATCH',
        body: body,
      })
    }),
    deleteSchedule: builder.mutation({
      query: (id) => ({
        url: `schedule/${id}`,
        method: 'DELETE',
      })
    }),
    getActiveSchedule: builder.query({
      query: () => ({
        url: `schedule/active`,
      })
    }),
    makeScheduleActive: builder.mutation({
      query: (id) => ({
        url: `schedule/active/${id}`,
        method: 'PUT',
      })
    })
  })
});

export const {
  useGetSchedulesQuery,
  useCreateScheduleMutation,
  useGetScheduleByIdQuery,
  useUpdateScheduleMutation,
  useDeleteScheduleMutation,
  useGetActiveScheduleQuery,
  useMakeScheduleActiveMutation,
} = scheduleApi;
