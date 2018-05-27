import React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const productsQuery = gql`
  {
    products {
      id
      name
      price
    }
  }
`;

class Products extends React.Component {
  render() {
    console.log(this.props);
    const {
      data: { loading, products }
    } = this.props;
    if (loading) {
      return <div>Loading ...</div>;
    }
    return (
      <div>
        {products.map(p => (
          <div>
            {p.name} ({p.price})
          </div>
        ))}
      </div>
    );
  }
}

export default graphql(productsQuery)(Products);
