import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
    completedTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, editTask, completedTask } = taskSlice.actions;

export default taskSlice.reducer;
