/*
1.Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
2.Thêm sách mới vào kho
3.Tìm kiếm sách theo tên hoặc id.
4.Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
5.Sắp xếp sách theo giá:
6.Tăng dần.
7.Giảm dần.
8.Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
9.Hiển thị tổng số lượng sách trong kho.
10.Thoát chương trình.
*/

let products = [
    {
        id: 1,
        name: " bảy viên ngọc rồng",
        price: 20000,
        quantity: 20,
        category: " truyện bảy viên ngọc rồng  "
    },
    {
        id: 2,
        name: " vua hải tặc ",
        price: 80000,
        quantity: 21,
        category: " truyện vua hải tặc"
    },
    {
        id: 3,
        name: " conan",
        price: 40000,
        quantity: 15,
        category: " truyện conan"
    },
    {
        id: 4,
        name: " Doraemon ",
        price: 60000,
        quantity: 30,
        category: " Truyện Doraemon "
    }
];

let cart = [];

while (true) {
    let choice = +prompt(`
        1. Hiển thị sách theo thể loại
        2. Thêm sách mới vào kho
        3. Tìm kiếm sách theo tên hoặc ID
        4. Mua sách
        5. Sắp xếp sách theo giá
        6. Tính tổng tiền trong giỏ hàng
        7. Hiển thị tổng số lượng sách trong kho
        8. Thoát
    `);

    if (choice === 8) {
        console.log("Cảm ơn bạn đã sử dụng dịch vụ!");
        break;
    }

    switch (choice) {
        case 1:
            showBooksByCategory();
            break;
        case 2:
            addNewBook();
            break;
        case 3:
            searchBook();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortBooksByPrice();
            break;
        case 6:
            calculateTotal();
            break;
        case 7:
            showTotalStock();
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
    }
}

let listBook = []
function displayBookByCategory (listBook){
 let choice = +prompt("1:Truyện bảy viên ngọc rồng , 2:Truyện vua hải tặc , 3:Truyện conan , 4:Truyện Doraemon ");
 if (choice == 1) {
    let listBookByCategory = listBook.filter((book)=>book.category === " Truyện bảy viên ngọc rồng ");
 } else if (choice == 2) {
    let listBookByCategory = listBook.filter((book)=>book.category === " Truyện vua hải tặc ");
 }else {
    console.log(" lựa chọn không hợp lệ")
 }
console.log(listBookByCategory)
}

function addNewBook(listBook) {
    let id = listBook.length + 1;

    let name;
    do {
        name = prompt("Nhập tên sách:");
        if (!name || name.length === 0) {
            console.log("Tên sách không được để trống. Vui lòng nhập lại.");
        }
    } while (!name || name.length === 0);

    let price;
    do {
        price = +prompt("Nhập giá sách:");
        if (isNaN(price) || price <= 0) {
            console.log("Giá sách phải là số dương hợp lệ. Vui lòng nhập lại.");
        }
    } while (isNaN(price) || price <= 0);

    let quantity;
    do {
        quantity = +prompt("Nhập số lượng sách:");
        if (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity)) {
            console.log("Số lượng sách phải là số nguyên dương. Vui lòng nhập lại.");
        }
    } while (isNaN(quantity) || quantity <= 0 || !Number.isInteger(quantity));

    let category;
    do {
        category = prompt("Nhập thể loại sách:");
        if (!category || category.length === 0) {
            console.log("Thể loại sách không được để trống. Vui lòng nhập lại.");
        }
    } while (!category || category.length === 0);

    listBook.push({ id, name, price, quantity, category });
    console.log("Sách đã được thêm vào kho!", listBook);
}


function searchBookByName() {
    let keyword = prompt("Nhập tên hoặc ID sách cần tìm:");
    let result = products.filter(book => book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id == keyword);
    console.log(result.length > 0 ? result : "Không tìm thấy sách.");
}

function buyBook() {
    let bookId = +prompt("Nhập ID sách cần mua:");
    let book = products.find(b => b.id === bookId);

    if (!book) {
        console.log("Sách không có trong kho.");
        return;
    }

    let quantity = +prompt("Nhập số lượng sách cần mua:");
    if (quantity > book.quantity) {
        console.log(`Không đủ số lượng sách. Chỉ còn ${book.quantity} quyển.`);
    } else {
        book.quantity -= quantity;
        let cartItem = cart.find(item => item.id === bookId);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ ...book, quantity });
        }
        console.log("Sách đã được thêm vào giỏ hàng!", cart);
    }
}

function sortBooksByPrice() {
    let sortChoice = +prompt("1. Tăng dần\n2. Giảm dần");
    products.sort((a, b) => sortChoice === 1 ? a.price - b.price : b.price - a.price);
    console.log("Danh sách sách sau khi sắp xếp:", products);
}

function calculateTotal() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    console.log("Hóa đơn mua hàng:");
    console.table(cart);
    console.log(`Tổng tiền cần thanh toán: ${total} VND`);
}

function showTotalStock() {
    if (products.length === 0) {
        console.log("Không có sách nào trong kho.");
        return;
    }
    let totalStock = products.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalStock}`);
}
