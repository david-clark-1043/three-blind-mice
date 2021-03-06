import { fetchComputers, fetchCustomers, fetchDepartments, fetchEmployeeCustomers, fetchEmployees, fetchLocations } from "./dataAccess.js";
import { ThreeBlindMice } from "./ThreeBlindMice.js";

// find target html tag
const mainContainer = document.querySelector("#container")

// function to render all the html in the target tag
const render = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(() => fetchLocations())
    .then(() => fetchCustomers())
    .then(() => fetchEmployeeCustomers())
    .then(() => {
        mainContainer.innerHTML = ThreeBlindMice()
    })
}

// invoke function to render everything
render()