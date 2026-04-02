import { NavLink } from "react-router"
import { useState } from "react"
import { STATE_OPTIONS, DEPARTMENT_OPTIONS, INITIAL_FORM_STATE } from "../../Models/FromData"
import { formInputValidation } from "../../Utils/employeeValidator"
import Modal  from "modal-react-plugin"
import "modal-react-plugin/dist/style.css"
import "./CreateEmployee.css"

import { Dropdown } from 'primereact/dropdown'
import { Calendar } from 'primereact/calendar'
import { InputText } from "primereact/inputtext"
import { Message } from 'primereact/message'

import { useDispatch } from "react-redux"
import { addEmployee } from "../../Slice/Employeeslice"
import { formatDate, parseDate }  from "../../Utils/dateUtils"
import { Button } from "primereact/button"

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
            <NavLink  className="form_nav_link" to="/employee-list">View current employees</NavLink>
            <form className="form_container" onSubmit={handleSubmit}>
                <h1 className="form_title">Create an employee</h1>
                <label htmlFor="firstName">First name</label>
                <InputText 
                    id="firstName"
                    name="firstName"  
                    value={formData.firstName} 
                    onChange={handleChange}
                    className={error.firstName ? "p-invalid" : ""}
                    variant="filled" 
                />
                {error.firstName && (<Message severity="error" text={error.firstName} />)}

                <label htmlFor="lastName">Last name</label>
                <InputText 
                    id="lastName" 
                    name="lastName"  
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className={error.lastName ? "p-invalid" : ""}
                    variant="filled" 
                />
                {error.lastName && (<Message severity="error" text={error.lastName} />)}

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
                    className={error.dateOfBirth ? "p-invalid" : ""}
                    variant="filled" 
                />
                {error.dateOfBirth && (<Message severity="error" text={error.dateOfBirth} />)}

                <label htmlFor="startDate">Start date</label>
                <Calendar
                    inputId="startDate"
                    name="startDate"
                    value={parseDate(formData.startDate)} 
                    onChange={(e) => handleDateChange("startDate", e)}
                    placeholder="MM/DD/YYYY"  
                    dateFormat="mm/dd/yy"
                    showIcon
                    className={error.startDate ? "p-invalid" : ""}
                    variant="filled" 
                />
                {error.startDate && (<Message severity="error" text={error.startDate} />)}

                <label htmlFor="street">Street</label>
                <InputText
                    id="street" 
                    name="street" 
                    value={formData.street} 
                    onChange={handleChange}
                    className={error.street ? "p-invalid" : ""}
                    variant="filled"  
                />
                {error.street && (<Message severity="error" text={error.street} />)}

                <label htmlFor="city">City</label>
                <InputText 
                    id="city"
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange} 
                    className={error.city ? "p-invalid" : ""}
                    variant="filled"
                />
                {error.city && (<Message severity="error" text={error.city} />)}

                <label htmlFor="state">State</label>
                <Dropdown
                    inputId="state"
                    name="state"
                    options={STATE_OPTIONS}
                    value={formData.state}
                    placeholder="Select a state"
                    onChange={handleChange}
                    className={error.state ? "p-invalid" : ""}
                    variant="filled"
                />
                {error.state && (<Message severity="error" text={error.state} />)}

                <label htmlFor="zipCode">ZipCode</label>
                <InputText 
                    id="zipCode"
                    name="zipCode"  
                    value={formData.zipCode}
                    placeholder="00000 / 00000-0000"
                    onChange={handleChange} 
                    className={error.zipCode ? "p-invalid" : ""}
                    variant="filled"
                />
                {error.zipCode && (<Message severity="error" text={error.zipCode} />)}

                <label htmlFor="department">Department</label>
                <Dropdown
                    inputId="department"
                    options={DEPARTMENT_OPTIONS}
                    name="department"
                    placeholder="Select a department"
                    value={formData.department}
                    onChange={handleChange}
                    className={error.department ? "p-invalid" : ""}
                    variant="filled"
                />
                {error.department && (<Message severity="error" text={error.department} />)}
                
                <Button 
                    type="submit"
                    label="Save"
                    severity="success"
                    className="save_button"
                />
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