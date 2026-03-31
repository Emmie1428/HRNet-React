import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { FilterMatchMode } from 'primereact/api';
import { useSelector } from 'react-redux';

function EmployeesTable () {
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
        <DataTable 
            dataKey="id"
            aria-label="List of employees"
            value={allEmployeesData} 
            paginator  rows={10}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            rowsPerPageOptions={[10, 25, 50, 100]}
            collapsedRowIcon
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            header={tableHeader}
            filters={{global: {value: globalFilterValue, matchMode : FilterMatchMode.CONTAINS}} }
            globalFilterFields={["firstName", "lastName", "startDate", "dateOfBirth", "department", "street", "city", "state", "zipCode"]} 
            emptyMessage="No employee found.">
            <Column field="firstName" header="First name" sortable aria-label="First name" style={{ minWidth: '6 rem' }} />
            <Column field="lastName" header="Last name" sortable aria-label="Last name" style={{ minWidth: '6rem' }}/>
            <Column field="startDate" header="Start date" sortable aria-label="Start date" style={{ minWidth: '6rem' }}/>
            <Column field="department" header="Department" sortable aria-label="Department" style={{ minWidth: '6rem' }} />
            <Column field="dateOfBirth" header="Date of birth" sortable aria-label="Date of birth" style={{ minWidth: '6rem' }}/>
            <Column field="street" header="Street" sortable aria-label="Street" style={{ minWidth: '6rem' }}/>
            <Column field="city" header="City" sortable aria-label="City" style={{ minWidth: '6rem' }}/>
            <Column field="state" header="State" sortable aria-label="State" style={{ minWidth: '6rem' }}/>
            <Column field="zipCode" header="Zip code" sortable aria-label="Zip Code" style={{ minWidth: '6rem' }}/>
        </DataTable>
    )
}

export default EmployeesTable