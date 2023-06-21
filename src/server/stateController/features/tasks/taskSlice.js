import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
    tasks: [],
}

const taskSlice = createSlice({
    name:'Task',
    initialState,
    reducers:{
        setTasks: (state, action) => {
            state.tasks = action.payload
        },
        setTask: (state, action) => {
            state.tasks = action.payload
            const remainingtasks = state.tasks.filter(
                (task) => task.id !== action.payload.id)
            
                state.cartItems=[...remainingtasks, action.payload]

        },

    }
})

const taskReducer = taskSlice.reducer;

const {
    setTasks,setTask
} = taskSlice.actions

export {
    taskReducer, setTasks,setTask
};