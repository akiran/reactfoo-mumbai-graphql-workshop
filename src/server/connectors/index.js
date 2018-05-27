import pubsub from "../pubnub";

let products = [
  {
    id: 1,
    name: "Macbook",
    description: "Latest Macbook with 16GB ram and Quad core processor",
    price: 65000,
    url: "/img/macbook.jpeg"
  },
  {
    id: 2,
    name: "Keyboard",
    description: "Ergonomic keyboard",
    price: 3000,
    url: "/img/keyboard.jpeg"
  }
];

let cartItems = [{ id: 1, productId: 2 }];

export function getUser() {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe"
  };
}

export function getProducts(searchString) {
  if (!searchString) {
    return products;
  }
  return products.filter(p => p.name.startsWith(searchString));
}

export function getProduct(id) {
  return products.find(product => product.id === id);
}

export function getCartItems() {
  return cartItems;
}
