import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slice/Employeeslice"
const store = configureStore({
    reducer: {
        employees: employeeReducer
    }
})

export default store