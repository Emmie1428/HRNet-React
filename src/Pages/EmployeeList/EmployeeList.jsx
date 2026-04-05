import { NavLink } from "react-router"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { useSelector } from 'react-redux';
import plus from "../../Assets/plus.png"
import "./EmployeeList.css"

function EmployeeList() {
    const [globalFilterValue , setGlobalFilterValue] = useState("")
    const allEmployeesData = useSelector((state) => state.employees)
    
    const renderSearchBar = () => {
        return (
            <div>
                <label htmlFor="employeeSearch">Search: </label>
                <InputText 
                    id="employeeSearch"
                    value={globalFilterValue}
                    onChange={(e) => setGlobalFilterValue(e.target.value)}
                    placeholder="Name, department..."
                />
            </div>
        )
    }

    const tableHeader = renderSearchBar ()

    return (
        <section className="table_container">
            <nav className="table_header">
                <h1 className="table_header_title">Current employees</h1>
                <NavLink to="/" className="table_header_navlink">
                    Create an employee
                    <img src={plus} alt="plus logo" className="table_header_navlink_logo" />
                </NavLink>
            </nav>
            <div className="table">
                <DataTable 
                    dataKey="id"
                    aria-label="List of employees"
                    value={allEmployeesData} 
                    paginator  rows={10}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    collapsedRowIcon
                    paginatorLeft
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    header={tableHeader}
                    filters={{global: {value: globalFilterValue, matchMode : FilterMatchMode.CONTAINS}} }
                    globalFilterFields={["firstName", "lastName", "startDate", "dateOfBirth", "department", "street", "city", "state", "zipCode"]} 
                    emptyMessage="No employee found.">
                    <Column field="firstName" header="First name" sortable aria-label="First name" />
                    <Column field="lastName" header="Last name" sortable aria-label="Last name" />
                    <Column field="startDate" header="Start date" sortable aria-label="Start date" />
                    <Column field="department" header="Department" sortable aria-label="Department" />
                    <Column field="dateOfBirth" header="Date of birth" sortable aria-label="Date of birth" />
                    <Column field="street" header="Street" sortable aria-label="Street" />
                    <Column field="city" header="City" sortable aria-label="City" />
                    <Column field="state" header="State" sortable aria-label="State" />
                    <Column field="zipCode" header="Zip code" sortable aria-label="Zip Code" />
                </DataTable>
            </div>
        </section>
    )
}

export default EmployeeList