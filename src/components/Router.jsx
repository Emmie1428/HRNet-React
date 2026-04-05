import { lazy, Suspense } from "react"
import {Routes, Route} from "react-router"
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee"


const EmployeeList = lazy(() => import ("../pages/EmployeeList/EmployeeList"))

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

