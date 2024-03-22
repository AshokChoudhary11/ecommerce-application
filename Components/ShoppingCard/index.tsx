import Image from "next/image";
import React from "react";
import {
  StyledShoppingCard,
  StyledShoppingCardContent,
  StyledShoppingCardHeading,
  StyledShoppingCardSubHeading,
  StyledShoppingCardWishlist,
} from "./index.styles";

export default function ShoppingCard() {
  return (
    <StyledShoppingCard>
      <Image src={"/product.png"} width={300} height={400} alt="product" />
      <StyledShoppingCardContent>
        <StyledShoppingCardHeading>
          PPXOC Milkyway dress in pressed flowers
        </StyledShoppingCardHeading>
        <StyledShoppingCardSubHeading>
          Sign in or Create an account to see pricing
        </StyledShoppingCardSubHeading>
      </StyledShoppingCardContent>
      <StyledShoppingCardWishlist>
        <Image
          src="/navigation-action/wishlist.svg"
          width={24}
          height={24}
          alt="wishlist"
        />
      </StyledShoppingCardWishlist>
    </StyledShoppingCard>
  );
}
