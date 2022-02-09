import { EmployeeList } from "./EmployeeList.js";

// adds all the html together

export const ThreeBlindMice = () => {
    return `<article class="EmployeeList">
                ${EmployeeList()}
            </article>`
}