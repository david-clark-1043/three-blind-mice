applicationState = {
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

// export copy functions

export const getEmployees = () => {
    return [...applicationState.employees]
}

export const getComputers = () => {
    return [...applicationState.computers]
}
