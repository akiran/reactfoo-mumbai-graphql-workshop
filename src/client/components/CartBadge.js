import React from "react";
import { Badge } from "reactstrap";

export default class CartBadge extends React.Component {
  render() {
    return <Badge color="dark">{/*{cartItems.length}*/}</Badge>;
  }
}
