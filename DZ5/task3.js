function checkOrder(available, ordered) {
    if (available < 0 || ordered < 0) {
        return "Incorrect input";
    } else if (available < ordered) {
        return "Your order is too large, we don\’t have enough goods.";
    } else if (ordered === 0) {
        return "Your order is empty";
    } else {
        return "Your order is accepted";
    }
};
let output = checkOrder(11, 12);
console.log(`${output}`);
