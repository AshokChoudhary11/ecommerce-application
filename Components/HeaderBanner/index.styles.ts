import styled from "styled-components";

export const StyledHeaderBanner = styled.div`
  display: inline-flex;
  padding: 8px 274px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  width: 100%;
`;

export const StyledHeaderBannerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    color: var(--Primary-Primary, #eb4c6b);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;
