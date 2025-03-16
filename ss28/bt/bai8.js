   let employees = []; 
while (true) {
    let choice = +prompt(
        `
        1. Thêm nhân viên mới.
        2.Xóa nhân viên theo id.
         Tìm thấy nhân viên có id confirm người dùng muốn xóa nhân viên hay không?
         Không tìm thấy nhân viên có id thì hiển thị thông bá
        3. Cập nhật mức lương của nhân viên theo ID.
        4. Tìm kiếm nhân viên theo tên.
        5. Thoát 
    `
    );

    switch (choice) {
        case 1:
            addNewEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateEmployeeSalary();
            break;
        case 4:
            searchEmployeeByName();
            break;
        case 5:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
    }
    
    if (choice === 5) {
        break;
    }
}

// Function thêm nhân viên
function addNewEmployee() {
    let name1 = prompt("Nhập tên:");
    let position = prompt("Nhập vị trí:");
    let salary = +prompt("Mời nhập lương:");

    let id = Math.floor(Math.random() * 5575676 + new Date().getMilliseconds());
    
    let employee = {
        id: id,
        name: name1,
        salary: salary,
        position: position,
    };

    employees.push(employee);
    console.log("Thêm nhân viên thành công!", employees);
}

// Function xóa nhân viên theo ID
function deleteEmployee() {
    let id = +prompt("Nhập ID nhân viên muốn xóa:");
    let findIndex = employees.findIndex(item => item.id == id);
    
    if (findIndex !== -1) {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa nhân viên này?");
        if (confirmDelete) {
            employees.splice(findIndex, 1);
            console.log("Xóa nhân viên thành công!");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID:", id);
    }
}

// Function cập nhật mức lương của nhân viên theo ID
function updateEmployeeSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = employees.find(item => item.id == id);
    
    if (employee) {
        let newSalary = +prompt(`Nhập mức lương mới cho nhân viên ${employee.name}:`);
        employee.salary = newSalary;
        console.log("Cập nhật lương thành công!", employee);
    } else {
        console.log("Không tìm thấy nhân viên có ID:", id);
    }
}

// Function tìm kiếm nhân viên theo tên
function searchEmployeeByName() {
    let nameSearch = prompt("Nhập tên nhân viên cần tìm:").toLowerCase();
    let foundEmployees = employees.filter(item => item.name.toLowerCase().includes(nameSearch));

    if (foundEmployees.length > 0) {
        console.log("Nhân viên tìm thấy:", foundEmployees);
    } else {
        console.log("Không tìm thấy nhân viên có tên:", nameSearch);
    }
}
