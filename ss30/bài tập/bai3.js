let phones = [
    { id: 1, 
     name: "iPhone 14", 
     price: 20000000, 
     quantity: 5,
     company: "Apple" },
    { id: 2, 
     name: "Samsung Galaxy S23", 
     price: 18000000,
     quantity: 8,
     company: "Samsung" },
    { id: 3, 
     name: "Xiaomi Mi 11",
     price: 12000000,
     quantity: 10,
     company: "Xiaomi" }
];

let cart = [];

while (true) {
    let choice = +prompt(`
        1. Hiển thị danh sách điện thoại theo hãng
        2. Thêm điện thoại mới vào cửa hàng
        3. Tìm kiếm điện thoại theo tên hoặc ID
        4. Mua điện thoại
        5. Thanh toán giỏ hàng
        6. Sắp xếp điện thoại theo giá
        7. Hiển thị tổng tiền điện thoại trong kho
        8. Hiển thị tổng số lượng điện thoại theo từng hãng
        9. Thoát chương trình
    `);

    if (choice === 9) {
        console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
        break;
    }

    switch (choice) {
        case 1:
            showPhonesByCompany();
            break;
        case 2:
            addNewPhone();
            break;
        case 3:
            searchPhone();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkoutCart();
            break;
        case 6:
            sortPhonesByPrice();
            break;
        case 7:
            calculateTotalStockValue();
            break;
        case 8:
            showTotalQuantityByCompany();
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
    }
}


function showPhonesByCompany() {
    let company = prompt("Nhập tên hãng điện thoại:");
    let result = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    console.log(result.length > 0 ? result : "Không có điện thoại nào của hãng này.");
}


function addNewPhone() {
    let id = phones.length + 1;
    let name;
    do {
        name = prompt("Nhập tên điện thoại:");
    } while (!name || name.length === 0);

    let price;
    do {
        price = +prompt("Nhập giá điện thoại:");
    } while (isNaN(price) || price <= 0);

    let quantity;
    do {
        quantity = +prompt("Nhập số lượng điện thoại:");
    } while (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity));

    let company;
    do {
        company = prompt("Nhập hãng điện thoại:");
    } while (!company || company.length === 0);

    phones.push({ id, name, price, quantity, company });
    console.log("Điện thoại đã được thêm vào cửa hàng!", phones);
}


function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = phones.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id == keyword);
    console.log(result.length > 0 ? result : "Không tìm thấy điện thoại.");
}

function buyPhone() {
    let phoneId = +prompt("Nhập ID điện thoại cần mua:");
    let phone = phones.find(p => p.id === phoneId);

    if (!phone) {
        console.log("Điện thoại không có trong cửa hàng.");
        return;
    }

    let quantity = +prompt("Nhập số lượng điện thoại cần mua:");
    if (quantity > phone.quantity) {
        console.log(`Không đủ hàng. Chỉ còn ${phone.quantity} chiếc.`);
    } else {
        phone.quantity -= quantity;
        let cartItem = cart.find(item => item.id === phoneId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...phone, quantity });
        }
        console.log("Điện thoại đã được thêm vào giỏ hàng!", cart);
    }
}

function checkoutCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống, không thể thanh toán.");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log(`Thanh toán thành công! Tổng tiền: ${total} VND`);
    cart = [];
}

function sortPhonesByPrice() {
    let sortChoice = +prompt("1. Tăng dần\n2. Giảm dần");
    phones.sort((a, b) => sortChoice === 1 ? a.price - b.price : b.price - a.price);
    console.log("Danh sách điện thoại sau khi sắp xếp:", phones);
}

function calculateTotalStockValue() {
    let totalValue = phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log(`Tổng giá trị điện thoại trong kho: ${totalValue} VND`);
}

function showTotalQuantityByCompany() {
    let companyStock = {};
    phones.forEach(phone => {
        if (companyStock[phone.company]) {
            companyStock[phone.company] += phone.quantity;
        } else {
            companyStock[phone.company] = phone.quantity;
        }
    });
    console.log("Tổng số lượng điện thoại theo hãng:", companyStock);
}
