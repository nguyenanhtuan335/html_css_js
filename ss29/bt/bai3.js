let menu = {};

while (true) {
    let choice = +prompt(
        `
        1. Thêm món ăn vào danh mục.
        2. Xóa món ăn theo tên khỏi danh mục.
        3. Cập nhật thông tin món ăn theo tên.
        4. Hiển thị toàn bộ menu.
        5. Tìm kiếm món ăn theo tên.
        6. Thoát.
    `
    );

    switch (choice) {
        case 1:
            addDish();
            break;
        case 2:
            deleteDish();
            break;
        case 3:
            updateDish();
            break;
        case 4:
            showMenu();
            break;
        case 5:
            searchDish();
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

function addDish() {
    let category = prompt("Nhập danh mục món ăn (VD: Món chính, Tráng miệng, Đồ uống):");
    let name = prompt("Nhập tên món ăn:");
    let price = +prompt("Nhập giá món ăn:");
    let description = prompt("Nhập mô tả món ăn:");

    let dish = {
        name: name,
        price: price,
        description: description,
    };

    if (!menu[category]) {
        menu[category] = [];
    }

    menu[category].push(dish);
    console.log(`Món ăn "${name}" đã được thêm vào danh mục "${category}".`);
}


function deleteDish() {
    let category = prompt("Nhập danh mục của món ăn cần xóa:");
    let name = prompt("Nhập tên món ăn cần xóa:");

    if (menu[category]) {
        let index = menu[category].findIndex(dish => dish.name.toLowerCase() === name.toLowerCase());

        if (index !== -1) {
            menu[category].splice(index, 1);
            console.log(`Món ăn "${name}" đã bị xóa khỏi danh mục "${category}".`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}


function updateDish() {
    let category = prompt("Nhập danh mục của món ăn cần cập nhật:");
    let name = prompt("Nhập tên món ăn cần cập nhật:");

    if (menu[category]) {
        let dish = menu[category].find(dish => dish.name.toLowerCase() === name.toLowerCase());

        if (dish) {
            dish.name = prompt(`Nhập tên mới (hiện tại: ${dish.name}):`) || dish.name;
            dish.price = +prompt(`Nhập giá mới (hiện tại: ${dish.price}):`) || dish.price;
            dish.description = prompt(`Nhập mô tả mới (hiện tại: ${dish.description}):`) || dish.description;

            console.log(`Món ăn "${name}" đã được cập nhật thành công.`);
        } else {
            console.log(`Không tìm thấy món ăn "${name}" trong danh mục "${category}".`);
        }
    } else {
        console.log(`Danh mục "${category}" không tồn tại.`);
    }
}


function showMenu() {
    console.log("MENU NHÀ HÀNG:");
    if (Object.keys(menu).length === 0) {
        console.log("Menu hiện tại trống.");
        return;
    }

    for (let category in menu) {
        console.log(`\n🔹 ${category.toUpperCase()}:`);
        menu[category].forEach((dish, index) => {
            console.log(
                `${index + 1}. ${dish.name} - ${dish.price} VNĐ\n   📌 ${dish.description}`
            );
        });
    }
}

function searchDish() {
    let name = prompt("Nhập tên món ăn cần tìm:");
    let foundDishes = [];

    for (let category in menu) {
        let dish = menu[category].find(dish => dish.name.toLowerCase() === name.toLowerCase());
        if (dish) {
            foundDishes.push({ category, dish });
        }
    }

    if (foundDishes.length > 0) {
        console.log(`🔍 Kết quả tìm kiếm cho món "${name}":`);
        foundDishes.forEach(item => {
            console.log(
                `📌 Danh mục: ${item.category}\n   ${item.dish.name} - ${item.dish.price} VNĐ\n   Mô tả: ${item.dish.description}`
            );
        });
    } else {
        console.log(`Không tìm thấy món ăn "${name}" trong menu.`);
    }
}
