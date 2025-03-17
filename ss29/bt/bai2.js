let danhSachSanPham = [];

while (true) {
    let choice = +prompt(
        `
        1. Thêm sản phẩm mới.
        2. Hiển thị tất cả sản phẩm.
        3. Hiển thị chi tiết sản phẩm theo ID.
        4. Cập nhật thông tin sản phẩm theo ID.
        5. Xóa sản phẩm theo ID.
        6. Lọc sản phẩm theo khoảng giá.
        7. Thoát.
    `
    );

    switch (choice) {
        case 1:
            themSanPham();
            break;
        case 2:
            hienThiTatCaSanPham();
            break;
        case 3:
            hienThiSanPhamTheoID();
            break;
        case 4:
            capNhatSanPhamTheoID();
            break;
        case 5:
            xoaSanPhamTheoID();
            break;
        case 6:
            locSanPhamTheoGia();
            break;
        case 7:
            console.log("Chương trình kết thúc.");
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
    }

    if (choice === 7) {
        break;
    }
}

function themSanPham() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm:");

    let id = Math.floor(Math.random() * 1000000);

    let product = {
        id: id,
        name: name,
        price: price,
        category: category,
        quantity: quantity,
    };

    danhSachSanPham.push(product);
    console.log("Thêm sản phẩm thành công!", danhSachSanPham);
}

function hienThiTatCaSanPham() {
    if (danhSachSanPham.length === 0) {
        console.log("Danh sách sản phẩm trống.");
    } else {
        console.log("📦 Danh sách sản phẩm:");
        console.table(danhSachSanPham);
    }
}


function hienThiSanPhamTheoID() {
    let id = +prompt("Nhập ID sản phẩm cần hiển thị:");
    let product = danhSachSanPham.find(product => product.id === id);

    if (product) {
        console.log("📜 Thông tin sản phẩm:", product);
    } else {
        console.log("Không tìm thấy sản phẩm có ID:", id);
    }
}


function capNhatSanPhamTheoID() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let product = danhSachSanPham.find(product => product.id === id);

    if (product) {
        product.name = prompt(`Nhập tên mới (hiện tại: ${product.name}):`) || product.name;
        product.price = +prompt(`Nhập giá mới (hiện tại: ${product.price}):`) || product.price;
        product.category = prompt(`Nhập danh mục mới (hiện tại: ${product.category}):`) || product.category;
        product.quantity = +prompt(`Nhập số lượng mới (hiện tại: ${product.quantity}):`) || product.quantity;

        console.log("🛠 Cập nhật sản phẩm thành công!", product);
    } else {
        console.log("Không tìm thấy sản phẩm có ID:", id);
    }
}


function xoaSanPhamTheoID() {
    let id = +prompt("Nhập ID sản phẩm muốn xóa:");
    let index = danhSachSanPham.findIndex(product => product.id === id);

    if (index !== -1) {
        let confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
        if (confirmDelete) {
            danhSachSanPham.splice(index, 1);
            console.log("🗑 Xóa sản phẩm thành công!");
        }
    } else {
        console.log("Không tìm thấy sản phẩm có ID:", id);
    }
}


function locSanPhamTheoGia() {
    let minPrice = +prompt("Nhập giá tối thiểu:");
    let maxPrice = +prompt("Nhập giá tối đa:");

    let filteredProducts = danhSachSanPham.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (filteredProducts.length > 0) {
        console.log("💰 Danh sách sản phẩm trong khoảng giá:", filteredProducts);
    } else {
        console.log("Không tìm thấy sản phẩm trong khoảng giá này.");
    }
}
