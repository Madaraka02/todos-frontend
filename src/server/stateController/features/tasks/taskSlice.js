import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    tasks: [],
    tasksID: [],
}

const taskSlice = createSlice({
    name:'Task',
    initialState,
    reducers:{
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
    }
})

const taskReducer = taskSlice.reducer;

const {
    setTasks
} = taskSlice.actions

export {
    taskReducer, setTasks
};