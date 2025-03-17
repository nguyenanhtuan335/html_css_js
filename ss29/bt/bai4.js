let danhSachCongViec = [];

while (true) {
    let choice = +prompt(
        `
        1. Thêm công việc mới.
        2. Hiển thị tất cả công việc.
        3. Cập nhật trạng thái công việc theo ID.
        4. Lọc công việc theo trạng thái (hoàn thành/chưa hoàn thành).
        5. Sắp xếp công việc theo trạng thái.
        6. Thoát.
    `
    );

    switch (choice) {
        case 1:
            themCongViec();
            break;
        case 2:
            hienThiCongViec();
            break;
        case 3:
            capNhatTrangThai();
            break;
        case 4:
            locCongViecTheoTrangThai();
            break;
        case 5:
            sapXepCongViec();
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

function themCongViec() {
    let name = prompt("Nhập tên công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let startDate = prompt("Nhập ngày bắt đầu (YYYY-MM-DD):");
    let status = prompt("Nhập trạng thái công việc (hoàn thành/chưa hoàn thành):").toLowerCase();

    if (status !== "hoàn thành" && status !== "chưa hoàn thành") {
        console.log("Trạng thái không hợp lệ. Vui lòng nhập 'hoàn thành' hoặc 'chưa hoàn thành'.");
        return;
    }

    let id = Math.floor(Math.random() * 10000);
    let task = { id, name, description, startDate, status };

    danhSachCongViec.push(task);
    console.log(`Công việc "${name}" đã được thêm thành công.`);
}

function hienThiCongViec() {
    if (danhSachCongViec.length === 0) {
        console.log("Danh sách công việc trống.");
        return;
    }

    console.log("\n📌 Danh sách công việc:");
    danhSachCongViec.forEach(task => {
        console.log(`ID: ${task.id} | ${task.name} | ${task.description} | ${task.startDate} | Trạng thái: ${task.status}`);
    });
}

function capNhatTrangThai() {
    let id = +prompt("Nhập ID công việc cần cập nhật:");
    let task = danhSachCongViec.find(task => task.id === id);

    if (task) {
        let newStatus = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành):").toLowerCase();
        if (newStatus === "hoàn thành" || newStatus === "chưa hoàn thành") {
            task.status = newStatus;
            console.log(`Trạng thái công việc "${task.name}" đã được cập nhật.`);
        } else {
            console.log("Trạng thái không hợp lệ.");
        }
    } else {
        console.log("Không tìm thấy công việc với ID này.");
    }
}

function locCongViecTheoTrangThai() {
    let filterStatus = prompt("Nhập trạng thái cần lọc (hoàn thành/chưa hoàn thành):").toLowerCase();
    if (filterStatus !== "hoàn thành" && filterStatus !== "chưa hoàn thành") {
        console.log("Trạng thái không hợp lệ.");
        return;
    }

    let filteredTasks = danhSachCongViec.filter(task => task.status === filterStatus);

    if (filteredTasks.length === 0) {
        console.log(`Không có công việc nào có trạng thái "${filterStatus}".`);
    } else {
        console.log(`📋 Danh sách công việc có trạng thái "${filterStatus}":`);
        filteredTasks.forEach(task => {
            console.log(`ID: ${task.id} | ${task.name} | ${task.description} | ${task.startDate} | Trạng thái: ${task.status}`);
        });
    }
}

function sapXepCongViec() {
    danhSachCongViec.sort((a, b) => (a.status > b.status ? 1 : -1));
    console.log("Danh sách công việc đã được sắp xếp theo trạng thái:");
    hienThiCongViec();
}
