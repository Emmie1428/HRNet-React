import { createSlice } from "@reduxjs/toolkit";
import employeesData from "../data/Employees.json"

const employeeSlice = createSlice({
    name: "employee",
    initialState: employeesData.employees,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload)
        }
    }

})

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer