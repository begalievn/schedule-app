import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const groupSlice = createApi({
  reducerPath: "Group",
  baseQuery: fetchBaseQuery({ baseUrl: {} }),
  endpoints: (build) => ({
    getGroup: build.query({
      query: () => "group",
    }),
  }),
});

export const { useGetGroupQuery } = groupSlice;
