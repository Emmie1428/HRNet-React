import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import employeesData from "../Data/Employees.json"


function EmployeesTable () {

    const localEmployees = JSON.parse(localStorage.getItem("employees") || "[]")
const allEmployeesData = [...employeesData.employees, ...localEmployees]

    return (
        <DataTable value={allEmployeesData} paginator  rows={10}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[10, 25, 50, 100]} dataKey="id"
            >
            <Column field="firstName" header="First name" sortable style={{ minWidth: '12rem' }} />
            <Column field="lastName" header="Last name" sortable style={{ minWidth: '12rem' }}/>
            <Column field="startDate" header="Start date" sortable style={{ minWidth: '12rem' }}/>
            <Column field="department" header="Department" sortable style={{ minWidth: '12rem' }} />
            <Column field="dateOfBirth" header="Date of birth" sortable style={{ minWidth: '12rem' }}/>
            <Column field="street" header="Street" sortable style={{ minWidth: '12rem' }}/>
            <Column field="city" header="City" sortable style={{ minWidth: '12rem' }}/>
            <Column field="state" header="State" sortable style={{ minWidth: '12rem' }}/>
            <Column field="zipCode" header="Zip code" sortable style={{ minWidth: '12rem' }}/>
            
        </DataTable>
    )
}

export default EmployeesTable