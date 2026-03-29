import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import employeesData from "../Data/Employees.json"
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';


function EmployeesTable () {
    const [globalFilterValue , setGlobalFilterValue] = useState("")

    const localEmployees = JSON.parse(localStorage.getItem("employees") || "[]")
    const allEmployeesData = [...employeesData.employees, ...localEmployees]

    const renderSearchBar = () => {
        return (
            <div>
                <InputText 
                    value={globalFilterValue}
                    onChange={(e) => setGlobalFilterValue(e.target.value)}
                    placeholder="Search"
                />
            </div>
        )
    }

    const tableHeader = renderSearchBar ()

    return (
        <DataTable 
            dataKey="id"
            value={allEmployeesData} 
            paginator  rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[10, 25, 50, 100]} 
            header={tableHeader}
            filters={{global: {value: globalFilterValue, matchMode : FilterMatchMode.CONTAINS}} }
            globalFilterFields={["firstName", "lastName", "startDate", "dateOfBirth", "department", "street", "city", "state", "zipCode"]} 
            emptyMessage="No employee found.">
            <Column field="firstName" header="First name" sortable style={{ minWidth: '6 rem' }} />
            <Column field="lastName" header="Last name" sortable style={{ minWidth: '6rem' }}/>
            <Column field="startDate" header="Start date" sortable style={{ minWidth: '6rem' }}/>
            <Column field="department" header="Department" sortable style={{ minWidth: '6rem' }} />
            <Column field="dateOfBirth" header="Date of birth" sortable style={{ minWidth: '6rem' }}/>
            <Column field="street" header="Street" sortable style={{ minWidth: '6rem' }}/>
            <Column field="city" header="City" sortable style={{ minWidth: '6rem' }}/>
            <Column field="state" header="State" sortable style={{ minWidth: '6rem' }}/>
            <Column field="zipCode" header="Zip code" sortable style={{ minWidth: '6rem' }}/>
            
        </DataTable>
    )
}

export default EmployeesTable