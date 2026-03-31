import { createSlice } from "@reduxjs/toolkit";
import employeesData from "../Data/Employees.json"

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