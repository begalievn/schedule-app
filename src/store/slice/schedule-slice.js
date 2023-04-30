import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedSubjects: [],
  selectedSchedule: {},
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSubject(state, action) {
      state.selectedSubjects.push(action.payload);
    },
    removeSubject(state, action) {
      state.selectedSubjects = state.selectedSubjects.filter((subject) => subject._id !== action.payload._id);
    },
    selectSchedule(state, action) {
      state.selectedSchedule = action.payload;
    }
  }
})

export const { addSubject, removeSubject, selectSchedule } = scheduleSlice.actions;

export default scheduleSlice;
