import Image from "next/image";
import React from "react";
import { StyledHeaderBanner, StyledHeaderBannerItem } from "./index.styles";
export default function HeaderBanner() {
  return (
    <StyledHeaderBanner>
      <StyledHeaderBannerItem>
        <Image src="/banner-logo.svg" alt="Logo" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </StyledHeaderBannerItem>
      <StyledHeaderBannerItem>
        <Image src="/banner-logo.svg" alt="Logo" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </StyledHeaderBannerItem>
      <StyledHeaderBannerItem>
        <Image src="/banner-logo.svg" alt="Logo" width={16} height={16} />
        <span>Lorem ipsum dolor</span>
      </StyledHeaderBannerItem>
    </StyledHeaderBanner>
  );
}
