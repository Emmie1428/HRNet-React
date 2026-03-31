import { NavLink } from "react-router"
import EmployeesTable from "../../Composants/EmployeeTable"

function EmployeeList() {
    return (
        <div>
            <h1>Curernt employees</h1>
            <EmployeesTable/>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList