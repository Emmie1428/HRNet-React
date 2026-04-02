import { lazy, Suspense } from 'react'
import {Routes, Route} from "react-router"
import CreateEmployee from "../Pages/CreateEmployee/CreateEmployee"


const EmployeeList = lazy(() => import ("../Pages/EmployeeList/EmployeeList"))

function Router() {
    return (
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" 
                element={
                    <Suspense fallback={<div>Loading...</div>}>
                        <EmployeeList />
                    </Suspense>
                } 
            />
        </Routes>
    )
}

export default Router