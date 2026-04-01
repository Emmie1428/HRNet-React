import { NavLink } from "react-router"
import { useState } from "react"
import { STATE_OPTIONS, DEPARTMENT_OPTIONS, INITIAL_FORM_STATE } from "../../Models/FromData"
import { formInputValidation } from "../../Utils/employeeValidator"
import Modal  from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"
import "./CreateEmployee.css"
import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { useDispatch } from "react-redux"
import { addEmployee } from "../../Slice/Employeeslice"
import { formatDate, parseDate }  from "../../Utils/dateUtils"

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

   const handleDateChange = (name, e) => {
        setFormData((prev) => ({
            ...prev,
            [name]: formatDate(e.value)
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
        <div className="main_container">
            <NavLink to="/employee-list">View current employees</NavLink>
            <form className="form_container" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name</label>
                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
                {error.firstName && <p>{error.firstName}</p>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
                {error.lastName && <p>{error.lastName}</p>}

                <label htmlFor="dateOfBirth">Date of birth</label>
                <Calendar 
                    inputId="dateOfBirth"
                    name="dateOfBirth"
                    value={parseDate(formData.dateOfBirth)}
                    onChange={(e) => handleDateChange("dateOfBirth", e)}
                    placeholder="MM/DD/YYYY"  
                    maxDate={new Date()}  
                    dateFormat="mm/dd/yy"
                    showIcon
                    variant="filled"
                />
                {error.dateOfBirth && <p>{error.dateOfBirth}</p>}

                <label htmlFor="startDate">Start date</label>
                <Calendar
                    inputId="startDate"
                    name="startDate"
                    value={parseDate(formData.startDate)} 
                    onChange={(e) => handleDateChange("startDate", e)}
                    placeholder="MM/DD/YYYY"  
                    dateFormat="mm/dd/yy"
                    showIcon
                    variant="filled"
                />
                {error.startDate && <p>{error.startDate}</p>}

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street" value={formData.street} onChange={handleChange} />
                {error.street && <p>{error.street}</p>}

                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} />
                {error.city && <p>{error.city}</p>}

                <label htmlFor="state">State</label>
                <Dropdown
                    inputId="state"
                    name="state"
                    options={STATE_OPTIONS}
                    value={formData.state}
                    placeholder="Select a state"
                    onChange={(option) => handleOptionChange("state", option)}
                    variant="filled"
                />
                {error.state && <p>{error.state}</p>}

                <label htmlFor="zipCode">ZipCode</label>
                <input type="text" name="zipCode" id="zipCode" value={formData.zipCode} onChange={handleChange} />
                {error.zipCode && <p>{error.zipCode}</p>}

                <label htmlFor="department">Department</label>
                <Dropdown
                    inputId="department"
                    options={DEPARTMENT_OPTIONS}
                    name="department"
                    placeholder="Select a department"
                    value={formData.department}
                    onChange={(option) => handleOptionChange("department", option)}
                    variant="filled"
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