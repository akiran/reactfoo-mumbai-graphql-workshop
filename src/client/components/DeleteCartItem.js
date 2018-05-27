import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CART_ITEMS_QUERY } from "../data/queries";

const DELETE_CART_ITEM = gql`
  mutation deleteCartItem($id: Int) {
    deleteCartItem(id: $id)
  }
`;

function deleteCartItemFromCache(cache, { data: { deleteCartItem } }) {
  console.log(deleteCartItem, "deletecarte");
  const { cartItems } = cache.readQuery({ query: CART_ITEMS_QUERY });
  const newCartItems = cartItems.filter(c => c.id !== deleteCartItem);
  cache.writeQuery({
    query: CART_ITEMS_QUERY,
    data: { cartItems: newCartItems }
  });
}

export default class DeleteToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={DELETE_CART_ITEM}
        variables={{ id }}
        optimisticResponse={{
          __typename: "Mutation",
          deleteCartItem: id
        }}
        update={deleteCartItemFromCache}
      >
        {deleteCartItem => (
          <img
            onClick={() =>
              deleteCartItem({
                variables: { id }
              })
            }
            src="/img/trash-o.svg"
            alt="delete"
          />
        )}
      </Mutation>
    );
  }
}
