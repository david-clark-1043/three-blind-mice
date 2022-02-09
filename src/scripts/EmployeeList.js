import { getEmployees, getComputers, getDepartments, getLocations } from "./dataAccess.js";


// function that builds html string
export const EmployeeList = () => {
    // get needed data
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const locations = getLocations()

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

        // close employee div tag
        employeeHTML += "</div>"

        return employeeHTML

    }).join("") // join so single string

    // return final list string
    return html
}