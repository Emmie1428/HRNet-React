import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Slice/Employeeslice"

const store = configureStore({
    reducer: {
        employees: employeeReducer
    }
})

export default store