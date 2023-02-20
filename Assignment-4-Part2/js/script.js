/*eslint-env browser*/

// CREATE AN ARRAY OF EMPLOYEES
let EmployeesArray = [[10120354, "Rishita Mote", 1234, "rmote@gmail.com", "Sales"],
                    [35678956, "Vaidehi Singh", 5567, "vai@gmail.com", "Marketing"],
                    [24367895, "Joe Joseph", 7947, "joe@gmail.com", "Executive"],
                    [12456789, "Neha Kale", 2438, "neha@gmail.com", "Administrative"],
                    [90834567, "Shivangi Patil", 5638, "shivangi12@vgmail.com", "Quality Assurance"]]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees') !== null) {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    EmployeesArray = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
let addform= document.getElementById('addForm')
let empTable= document.getElementById('empTable')
let empCount= document.getElementById('empCount')
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
Gridbuilding()

// ADD EMPLOYEE
addform.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID       = parseInt(document.getElementById('id').value)
    let employeeName     = document.getElementById('name').value
    let employeeExt      = parseInt(document.getElementById('extension').value)
    let employeeEmail    = document.getElementById('email').value
    let employeeDept     = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployeeArray = [employeeID, employeeName, employeeExt, employeeEmail, employeeDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    EmployeesArray.push(newEmployeeArray)
    // BUILD THE GRID
    Gridbuilding()
    // RESET THE FORM
    addform.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    addform.id.focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employees details?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let index = e.target.parentNode.parentNode.index
            // REMOVE EMPLOYEE FROM ARRAY
            EmployeesArray.splice(index - 1, 1)
            // BUILD THE GRID
            Gridbuilding()
        }
    }
})

// BUILD THE EMPLOYEES GRID
function Gridbuilding() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of EmployeesArray) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-lg btn-danger delete">X</button></td>
        </tr>

        `}
// BIND THE TBODY TO THE EMPLOYEE TABLE
empTable.appendChild(tbody);
// UPDATE EMPLOYEE COUNT
empCount.value = `(${EmployeesArray.length})`
// STORE THE ARRAY IN STORAGE
localStorage.setItem('employees', JSON.stringify(EmployeesArray))
}
