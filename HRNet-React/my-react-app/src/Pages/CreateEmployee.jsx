import { NavLink } from "react-router"

function CreateEmployee() {
    return (
        <div>
            <NavLink to="/employee-list">View current employees</NavLink>
        </div>
    )
}

export default CreateEmployee