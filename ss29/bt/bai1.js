let contacts = [];

while (true) {
    let choice = +prompt(
        `
        1. Thêm liên hệ mới.
        2. Hiển thị danh sách danh bạ.
        3. Tìm kiếm liên hệ theo số điện thoại.
        4. Cập nhật thông tin liên hệ theo ID.
        5. Xóa liên hệ theo ID.
        6. Thoát.
    `
    );

    switch (choice) {
        case 1:
            addContact();
            break;
        case 2:
            showContacts();
            break;
        case 3:
            searchContactByPhone();
            break;
        case 4:
            updateContactById();
            break;
        case 5:
            deleteContactById();
            break;
        case 6:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
    }

    if (choice === 6) {
        break;
    }
}


function addContact() {
    let name = prompt("Nhập tên liên hệ:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");

    let id = Math.floor(Math.random() * 1000000);

    let contact = {
        id: id,
        name: name,
        email: email,
        phone: phone,
    };

    contacts.push(contact);
    console.log("Thêm liên hệ thành công!", contacts);
}

function showContacts() {
    if (contacts.length === 0) {
        console.log("Danh bạ trống.");
    } else {
        console.log("Danh sách danh bạ:");
        console.table(contacts);
    }
}

function searchContact() {
    let phoneSearch = prompt("Nhập số điện thoại cần tìm:");
    let foundContacts = contacts.filter(contact => contact.phone.includes(phoneSearch));

    if (foundContacts.length > 0) {
        console.log("Liên hệ tìm thấy:", foundContacts);
    } else {
        console.log("Không tìm thấy liên hệ với số điện thoại:", phoneSearch);
    }
}

function updateContact() {
    let id = +prompt("Nhập ID liên hệ cần cập nhật:");
    let contact = contacts.find(contact => contact.id === id);

    if (contact) {
        contact.name = prompt(`Nhập tên mới (hiện tại: ${contact.name}):`) || contact.name;
        contact.email = prompt(`Nhập email mới (hiện tại: ${contact.email}):`) || contact.email;
        contact.phone = prompt(`Nhập số điện thoại mới (hiện tại: ${contact.phone}):`) || contact.phone;

        console.log("Cập nhật thông tin thành công!", contact);
    } else {
        console.log("Không tìm thấy liên hệ có ID:", id);
    }
}

function deleteContact() {
    let id = +prompt("Nhập ID liên hệ muốn xóa:");
    let index = contacts.findIndex(contact => contact.id === id);

    if (index !== -1) {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa liên hệ này?");
        if (confirmDelete) {
            contacts.splice(index, 1);
            console.log("Xóa liên hệ thành công!");
        }
    } else {
        console.log("Không tìm thấy liên hệ có ID:", id);
    }
}
