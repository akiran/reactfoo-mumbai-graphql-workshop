import React from "react";
import { Button } from "reactstrap";

export default class AddToCart extends React.Component {
  render() {
    return (
      <div>
        <Button className="mt-4" color="primary">
          Add to cart
        </Button>
      </div>
    );
  }
}
