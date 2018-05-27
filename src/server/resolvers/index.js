import {
  getUser,
  getProducts,
  getProduct,
  addProduct,
  getCartItems,
  getCartItem,
  addToCart,
  deleteCartItem
} from "../connectors";
import pubsub from "../pubnub";

export default {
  User: {
    // firstName(user, _, __) {
    //   return `Mr. ${user.firstName}`;
    // },
    fullName(user, args, ctx) {
      return `${user.firstName} ${user.lastName}`;
    }
  },
  CartItem: {
    product(parent, args, ctx) {
      return getProduct(parent.productId);
    }
  },
  Query: {
    user(_, args, ctx) {
      return getUser();
    },
    products(_, args, ctx) {
      return getProducts(args.searchString);
    },
    product(_, args, ctx) {
      return getProduct(args.id);
    },
    cartItems(_, args, ctx) {
      return getCartItems();
    }
  },
  Mutation: {
    addToCart(_, args, ctx) {
      return addToCart(args.productId);
    }
  }
};
