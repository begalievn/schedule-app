import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedSubjects: [],
  selectedSchedule: {},
  scheduleName: null,
  selectedSemester: null,
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
    },
    handleScheduleNameChange(state, action) {
      state.scheduleName = action.payload;
    },
    selectScheduleSemester(state, action) {
      state.selectedSemester = action.payload;
    }
  }
})

export const { addSubject, removeSubject, selectSchedule, handleScheduleNameChange, selectScheduleSemester } = scheduleSlice.actions;

export default scheduleSlice;
