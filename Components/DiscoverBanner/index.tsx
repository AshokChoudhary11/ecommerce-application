import React from "react";
import { StyledNavigationActionContainer } from "../Header/index.styles";
import {
  StyledDiscoverBanner,
  StyledDiscoverBannerContent,
  StyledDiscoverBannerDescription,
  StyledDiscoverBannerTitle,
} from "./index.styles";

export default function DiscoverBanner() {
  return (
    <StyledDiscoverBanner>
      <StyledDiscoverBannerContent>
        <StyledDiscoverBannerTitle>
          Discover our products
        </StyledDiscoverBannerTitle>
        <StyledDiscoverBannerDescription>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </StyledDiscoverBannerDescription>
      </StyledDiscoverBannerContent>
    </StyledDiscoverBanner>
  );
}
