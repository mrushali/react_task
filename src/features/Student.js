import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { StudentData } from "../FakeData";

export const studentSlice = createSlice({
    name: 'student',
    initialState: { value: StudentData },
    reducers: {
        addStudent: (state, action) => {
            state.value.push(action.payload);
        },
        deleteStudent: (state, action) => {
            state.value = state.value.filter((student) => student.id !== action.payload.id);
        },
        updateStudent: (state, action) => {
            state.value.map((student) => {
                if (student.id === action.payload.id) {
                    student.first_name = action.payload.first_name;
                }
            })
        },
    },
});

export const { addStudent, deleteStudent, updateStudent } = studentSlice.actions;
export default studentSlice.reducer;