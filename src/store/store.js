import { configureStore } from "@reduxjs/toolkit";

import { groupSlice } from "./slice/group-slice";

export const store = configureStore({
  reducer: {
    [groupSlice.reducerPath]: groupSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(groupSlice.middleware),
});
