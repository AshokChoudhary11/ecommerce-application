import React from "react";
import ShoppingCard from "../ShoppingCard";
import { StyledShoppingList, StyledShoppingListContent } from "./index.styles";

export default function ShoppingList() {
  return (
    <StyledShoppingList>
      <div style={{ width: "300px" }}>ABCD</div>
      <StyledShoppingListContent>
        <ShoppingCard />
        <ShoppingCard /> <ShoppingCard /> <ShoppingCard /> <ShoppingCard />{" "}
        <ShoppingCard /> <ShoppingCard /> <ShoppingCard />
      </StyledShoppingListContent>
    </StyledShoppingList>
  );
}
