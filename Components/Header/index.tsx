import Image from "next/image";
import React from "react";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledLogoRow,
  StyledNavBar,
  StyledNavBarItem,
  StyledNavigationAction,
  StyledNavigationActionContainer,
} from "./index.styles";

export default function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledLogoRow>
          <Image src="/logo.svg" width={36} height={36} alt="logo" />
          <h1>LOGO</h1>
          <StyledNavigationActionContainer>
            <StyledNavigationAction>
              <Image
                src="/navigation-action/search.svg"
                width={24}
                height={24}
                alt="search"
              />
            </StyledNavigationAction>
            <StyledNavigationAction>
              <Image
                src="/navigation-action/wishlist.svg"
                width={24}
                height={24}
                alt="wishlist"
              />
            </StyledNavigationAction>
            <StyledNavigationAction>
              <Image
                src="/navigation-action/cart.svg"
                width={24}
                height={24}
                alt="cart"
              />
            </StyledNavigationAction>
            <StyledNavigationAction>
              <Image
                src="/navigation-action/profile.svg"
                width={24}
                height={24}
                alt="user"
              />
            </StyledNavigationAction>
          </StyledNavigationActionContainer>
        </StyledLogoRow>
      </StyledHeader>
      <StyledNavBar>
        <StyledNavBarItem>SHOP</StyledNavBarItem>
        <StyledNavBarItem>SKILLS</StyledNavBarItem>
        <StyledNavBarItem>STORIES</StyledNavBarItem>
        <StyledNavBarItem>ABOUT</StyledNavBarItem>
        <StyledNavBarItem>CONTACT US</StyledNavBarItem>
      </StyledNavBar>
    </StyledHeaderWrapper>
  );
}
