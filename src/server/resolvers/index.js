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
  Query: {
    user(_, args, ctx) {
      return getUser();
    },
    products(_, args, ctx) {
      return getProducts();
    },
    product(_, args, ctx) {
      return getProduct(args.id);
    }
  }
};
