import React from "react";
import { Query, ApolloConsumer } from "react-apollo";
import { SELECTED_PRODUCTS_QUERY } from "../data/queries";

export default class ProductSelect extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <Query query={SELECTED_PRODUCTS_QUERY}>
        {({ data: { selectedProducts } }) => {
          return (
            <ApolloConsumer>
              {cache => {
                return (
                  <input
                    type="checkbox"
                    className="mr-4"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => {
                      const newSelectedProducts = selectedProducts.includes(
                        product.id
                      )
                        ? selectedProducts.filter(p => p !== product.id)
                        : selectedProducts.concat(product.id);
                      cache.writeData({
                        data: { selectedProducts: newSelectedProducts }
                      });
                    }}
                  />
                );
              }}
            </ApolloConsumer>
          );
        }}
      </Query>
    );
  }
}
