import { getEmployees, getComputers } from "./dataAccess.js";


// function that builds html string
export const EmployeeList = () => {
    // get needed data
    const employees = getEmployees()
    const computers = getComputers()

    // initialize empty string
    let html = ""

    // iterate over employees and add to the string
    html += employees.map(employee => {
        let employeeHTML = '<div class="employee">'
        // add employee name
        employeeHTML += `<header class="employee__name">
                            <h1>${employee.name}</h1>
                        </header>`
        // get the employee's computer
        const computer = computers.find(computer => computer.id === employee.computerId)
        // add employee computer
        employeeHTML += `<section class="employee__computer">
                            Currently using a ${computer.year} ${computer.model}
                        </section>`

        return employeeHTML
    }) 

    return html
}