import { NavLink } from "react-router"
import { useState } from "react"
import { STATES, DEPARTEMENTS, INITIAL_FORM_STATE } from "../Models/FromData"
import { formInputValidation } from "../Utils/EmployeeValidator"
import Modal from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"


function CreateEmployee() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE)
    const [error, setError] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev, 
            [name]: value
        }))
        setError((prev) => ({
            ...prev, 
            [name]: ""
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const validationError = formInputValidation(formData)
        setError(validationError)

        if (Object.keys(validationError).length > 0) {
            return
        }

        /*Generate a random string for the id. 9 numbers and letters*/
        const generateId = () => Math.random().toString(36).slice(2, 11)
        const newEmployee = {...formData, id:generateId()}

        const employees = JSON.parse(localStorage.getItem("employees") || "[]")
        employees.push(newEmployee)
        localStorage.setItem("employees", JSON.stringify(employees))

        setFormData(INITIAL_FORM_STATE)
        setError({})
        setModalIsOpen(true)

    }

    return (
        <div>
            <NavLink to="/employee-list">View current employees</NavLink>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
                {error.firstName && <p>{error.firstName}</p>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
                {error.lastName && <p>{error.lastName}</p>}

                <label htmlFor="dateOfBirth">Date of birth</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required/>

                <label htmlFor="startDate">Start date</label>
                <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} required/>

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} />
                {error.street && <p>{error.street}</p>}

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                {error.city && <p>{error.city}</p>}

                <label htmlFor="state">State</label>
                <select name="state" id="state" value={formData.state} onChange={handleChange} required>
                    <option value="">Select a state</option>
                    {STATES.map(state => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))}
                </select>

                <label htmlFor="zipCode">ZipCode</label>
                <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleChange} />
                {error.zipCode && <p>{error.zipCode}</p>}

                <label htmlFor="departement">Departement</label>
                <select name="departement" id="departement" value={formData.departement} onChange={handleChange} required>
                    <option value="">Select a departement</option>
                    {DEPARTEMENTS.map((departement, index) => (
                        <option key={`${departement}-${index}`} value={departement}>
                            {departement}
                        </option>
                    ))}
                </select>
                <button type="submit">Save</button>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                message="Employee created"
            />
        </div>
        
    )
}

export default CreateEmployee