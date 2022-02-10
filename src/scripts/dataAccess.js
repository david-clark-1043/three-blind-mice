const applicationState = {
    // should get:
        // computers:
        // employees:
        // departments:
        // locations:
        // customers:
        // employeeCustomers:
}

// fetch functions
const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (employees) => {
                // Store the external state in application state
                applicationState.employees = employees
            }
        )
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
        .then(response => response.json())
        .then(
            (computers) => {
                // Store the external state in application state
                applicationState.computers = computers
            }
        )
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
        .then(response => response.json())
        .then(
            (departments) => {
                // Store the external state in application state
                applicationState.departments = departments
            }
        )
}

export const fetchLocations = () => {
    return fetch(`${API}/locations`)
        .then(response => response.json())
        .then(
            (locations) => {
                // Store the external state in application state
                applicationState.locations = locations
            }
        )
}

export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
        .then(response => response.json())
        .then(
            (customers) => {
                // Store the external state in application state
                applicationState.customers = customers
            }
        )
}

export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeeCustomers`)
        .then(response => response.json())
        .then(
            (employeeCustomers) => {
                // Store the external state in application state
                applicationState.employeeCustomers = employeeCustomers
            }
        )
}

// export copy functions

export const getEmployees = () => {
    return [...applicationState.employees]
}

export const getComputers = () => {
    return [...applicationState.computers]
}

export const getDepartments = () => {
    return [...applicationState.departments]
}

export const getLocations = () => {
    return [...applicationState.locations]
}

export const getEmployeeCustomers = () => {
    return [...applicationState.employeeCustomers]
}

export const getCustomers = () => {
    return [...applicationState.customers]
}

