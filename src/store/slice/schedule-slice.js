import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedSubjects: [],
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
    }
  }
})

export const { addSubject, removeSubject } = scheduleSlice.actions;

export default scheduleSlice;
