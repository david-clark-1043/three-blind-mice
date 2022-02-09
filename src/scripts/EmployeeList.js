import { getEmployees, getComputers, getDepartments, getLocations, getCustomers, getEmployeeCustomers } from "./dataAccess.js";


// function that builds html string
export const EmployeeList = () => {
    // get needed data
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()

    // initialize empty string
    let html = ""

    // iterate over employees and add to the string
    html += employees.map(employee => {
        let employeeHTML = '<div class="employee">'

        // add employee name
        employeeHTML += `<header class="employee__name">
                            <h1>${employee.firstName} ${employee.lastName}</h1>
                        </header>`

        // get the employee's computer
        const computer = computers.find(computer => computer.id === employee.computerId)
        
        // add employee computer
        employeeHTML += `<section class="employee__computer">
                            Currently using a ${computer.year} ${computer.model}
                        </section>`

        //get the employee's department
        const department = departments.find(department => department.id === employee.departmentId)

        // add employee department
        employeeHTML += `<section class="employee__department">
                            Works in the ${department.name} department
                        </section>`

        // get employee's location
        const location = locations.find(location => location.id === employee.locationId)

        // add employee's location
        employeeHTML += `<section class="employee__location">
                            Works at the ${location.name} office
                        </section>`

        // get employee customers
        // find all employeeCustomer pairs for the employee
        const matchedEmployeeCustomerPairs = employeeCustomers.filter(employeeCustomer => employeeCustomer.employeeId === employee.id)
        // create array of customer names
        const matchedCustomers = matchedEmployeeCustomerPairs.map(match => {
            // find customer name by customer id for each matching employeeCustomer pair
            const matchedName = customers.find(customer => customer.id === match.customerId).name
            return `${matchedName}`
        })

        // add employee's customers
        employeeHTML += `<section class="employee__customers">
                            Has worked for the following customers.
                            <ul>`
        
        employeeHTML += `${
            matchedCustomers.map(customer => {

                return `<li>${customer}</li>`
            }).join("")
        }`

        // close employee div tag
        employeeHTML += "</div>"

        return employeeHTML

    }).join("") // join so single string

    // return final list string
    return html
}