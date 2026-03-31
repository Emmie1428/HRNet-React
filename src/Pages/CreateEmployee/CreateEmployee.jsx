import { NavLink } from "react-router"
import { useState } from "react"
import { STATE_OPTIONS, DEPARTMENT_OPTIONS, INITIAL_FORM_STATE } from "../../Models/FromData"
import { formInputValidation } from "../../Utils/EmployeeValidator"
import Modal  from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"
import "./CreateEmployee.css"
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { useDispatch } from "react-redux"
import { addEmployee } from "../../Slice/Employeeslice"

function CreateEmployee() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE)
    const [error, setError] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const dispatch = useDispatch()

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

    const handleDateChange = (name, date) => {
        setFormData((prev) => ({
            ...prev,
            [name]: date 
        }))
    }

    const handleOptionChange = (name, option) => {
        setFormData((prev) => ({
            ...prev,
            [name] : option.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const validationError = formInputValidation(formData)
        setError(validationError)

        if (Object.keys(validationError).length > 0) {
            return
        }

        dispatch(addEmployee({...formData, id: crypto.randomUUID()}))

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

                <label id="dateOfBirth">Date of birth</label>
                <Calendar 
                    aria-labelledby="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth} 
                    onChange={(e) => handleDateChange(e.value)}
                    dateFormat="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"  
                    local= "en"
                    maxDate={new Date()}  
                />
                {error.dateOfBirth && <p>{error.dateOfBirth}</p>}

                <label id="startDate">Start date</label>
                <Calendar
                    aria-labelledby="startDate"
                    name="sartDate"
                    value={formData.startDate} 
                    onChange={(date) => handleDateChange("startDate",date.value)}
                    dateFormat="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"  
                />
                {error.startDate && <p>{error.startDate}</p>}

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} />
                {error.street && <p>{error.street}</p>}

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                {error.city && <p>{error.city}</p>}

                <label id="state">State</label>
                <Dropdown
                    aria-labelledby="state"
                    aria-label="Choose a state"
                   
                    name="state"
                    options={STATE_OPTIONS}
                    placeholder="Select a state"
                    onChange={(e) => handleOptionChange("state", e.value)}
                />
                {error.state && <p>{error.state}</p>}

                <label htmlFor="zipCode">ZipCode</label>
                <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleChange} />
                {error.zipCode && <p>{error.zipCode}</p>}

                <label htmlFor="department">Department</label>
                <Dropdown
                    inputId="department"
                    options={DEPARTMENT_OPTIONS}
                    name="departement"
                    onChange={(e) => handleOptionChange("department", e.value)}
                />
                {error.department && <p>{error.department}</p>}
                
                <button type="submit">Save</button>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                message="Employee created"
                messageClassName="custom_modal_message"
            />
        </div>
        
    )
}

export default CreateEmployee