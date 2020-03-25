// Bài 1: Đếm tổng số lượt vote trong mảng

// Turn an array of voter objects into a count of how many people voted

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function totalVotes(arr) {
    // write code here...
    return arr.reduce((counter, { voted }) => voted ? counter + 1 : counter, 0);
}

// Bài 2: Tính tổng giá tiền các sản phẩm trong giỏ hàng

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(wishlist) {
    // Write code here...
    return wishlist.reduce((sum, wish) => { return sum + wish.price; }, 0);
}

// Bài 3: Viết hàm trả về mảng chứa tên sản các sản phẩm

// Given an array of all your wishlist items, returns an array of titles

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

function arrayTitle(wishlist) {
    // Write code here...

    return wishlist.map(wish => wish.title);
}