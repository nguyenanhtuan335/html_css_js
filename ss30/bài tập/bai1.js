/*
 Tạo ứng dụng đi mua hàng 
 1. hiển thị các sản phẩm theo danh mục
 2.Nhập id các sản phẩm theo danh mục
    + sản phẩm không có trong cửa hàng 
    + Trong trường hợp không có sản phẩm 
    +  Cho người dùng nhập số lượng sản phầm cần mua 
      + kiểm tra xem sản phẩm có đủ hàng bán hay không
        + Nếu không đủ hiển thị 
        + Nếu dủ thì số lượng sản phầm trong cửa hàng sẽ trừ đi 
        + Thêm sản phẩm vào giở hàng 
3. Xắp xếp theo giá 
   + Tăng dần 
   + Giảm dần 
4.Thanh toán tiền trong giỏ hàng
5. Thoát
*/

let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh"
    }
];
let cart = [];
// Tạo menu
while (true) {
    let choice = +prompt(
        `
        1. Hiển thị sản phẩm theo danh mục
        2. Đi mua hàng 
        3. Sắp xếp hóa đơn theo giá 
        4. Tính hóa đơn 
        5. Thoát 
        `
    );

    if (choice === 5) {
        console.log("Cảm ơn bạn đã mua hàng!");
        break;
    }

    switch (choice) {
        case 1:
            showProductByCategory();
            break;
        case 2:
            addToCart();
            break;
        case 3:
            sortCartByPrice();
            break;
        case 4:
            calculateTotal
            break;
        default:
            console.log("Vui lòng nhập lựa chọn hợp lệ!");
            break;
    }
}

// 1️ Hiển thị sản phẩm theo danh mục
function showProductByCategory() {
    let categoryChoice = +prompt(`
        1. Món ăn dân tộc Kinh
        2. Món ăn dân tộc Mông
    `);
    let result = [];
    if (categoryChoice === 1) {
        result = products.filter(item => item.category === "món ăn dân tộc Kinh");
    } else if (categoryChoice === 2) {
        result = products.filter(item => item.category === "món ăn dân tộc Mông");
    } else {
        console.log("Không có danh mục này.");
        return;
    }

    if (result.length > 0) {
        console.log("Danh sách sản phẩm:", result);
    } else {
        console.log("Không có món ăn nào.");
    }
}

// 2️. Đi mua hàng
function addToCart() {
    let productId = +prompt("Nhập ID sản phẩm bạn cần mua:");

    let productIndex = products.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
        let quantity = +prompt("Nhập số lượng:");

        if (quantity > products[productIndex].quantity) {
            console.log(`Sản phẩm không đủ hàng. Còn lại: ${products[productIndex].quantity}`);
        } else {
            products[productIndex].quantity -= quantity;

            let indexInCart = cart.findIndex(item => item.id === productId);

            if (indexInCart === -1) {
                cart.push({ ...products[productIndex], quantity });
            } else {
                cart[indexInCart].quantity += quantity;
            }

            console.log("Sản phẩm đã được thêm vào giỏ hàng!", cart);
        }
    } else {
        console.log("Sản phẩm không có trong cửa hàng.");
    }
}
//3.Xắp xếp theo giá 
function sortCartByPrice(){
    let sortChoice = +prompt(`
        1.Xắp xếp theo thữ tự tăng dần 
        2.Xắp xếp theo thứ tự giảm dần 
        `);
if (sortChoice===1) {
    cart.sort((a,b)=> a.price - b.price);
}else if (sortChoice===2) {
    cart.sort((a,b)=>b.price - a.price);
}else {
console.log(" Lựa chọn không hợp lệ");
return;
}
 console.log(" Cửa hàng sau khi xắp xếp",cart);
}

4.// Tính tổng tiền trong giỏ hàng 
function calculateTotal(){
if (cart.length===0) {
    console.log(" sản phẩm không có trong cửa hàng");
    return;
}
let total = cart.reduce((sum,item) => sum + item.price * item.quantity,0);
console.log(" Hóa đơn mau hàng của bạn:");
console.table(cart);
console.log(` Tổng tiền cần thanh toán là : ${total} VND `);
}

