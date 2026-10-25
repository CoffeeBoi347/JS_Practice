const cart = [
    { name: "Pen", price: 10, quantity: 2},
    { name: "Notebook", price: 60, quantity: 3},
    { name: "Eraser", price: 55, quantity: 1}
]

console.log(cart.filter(x => x.price > 50));