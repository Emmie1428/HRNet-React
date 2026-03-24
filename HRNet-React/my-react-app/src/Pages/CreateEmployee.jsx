import { NavLink } from "react-router"
import { STATES, DEPARTEMENTS, INITIAL_FORM_STATE } from "../Models/FromData"
import { useState } from "react"

function CreateEmployee() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
    
    /*Génère un string random pour le Id*/
    const generateId = () => Math.random().toString(36).slice(2, 11)
    const newEmployee = {...formData, id:generateId()}

    const employees = JSON.parse(localStorage.getItem("employees") || "[]")
    employees.push(newEmployee)
    localStorage.setItem("employees", JSON.stringify(employees))

    setFormData(INITIAL_FORM_STATE)
    alert("empléy créé")

    }

    return (
        <div>
            <NavLink to="/employee-list">View current employees</NavLink>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="dateOfBirth">Date of birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

                <label htmlFor="startDate">Start date</label>
                <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} required />

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} required />

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} required />

                <label htmlFor="state">State</label>
                <select name="state" id="state" value={formData.state} onChange={handleChange} required>
                    <option>Select a state</option>
                    {STATES.map(state => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="zipCode">ZipCode</label>
                <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleChange} required />


                <button type="submit">Save</button>


            </form>
        </div>
        
    )
}

export default CreateEmployee