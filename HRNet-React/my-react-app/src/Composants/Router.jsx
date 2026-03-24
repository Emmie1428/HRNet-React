import {Routes, Route} from "react-router"
import CreateEmployee from "../Pages/CreateEmployee"
import EmployeeList from "../Pages/EmployeeList"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
    )
}

export default Router