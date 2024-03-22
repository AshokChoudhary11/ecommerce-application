import styled from "styled-components";

export const StyledShoppingCard = styled.div`
  width: 300px;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
`;

export const StyledShoppingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledShoppingCardHeading = styled.h2`
  overflow: hidden;
  color: var(--Text-Text, #252020);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  width: 90%;
`;

export const StyledShoppingCardSubHeading = styled.div`
  color: var(--Text-Secondary-Text, #888792);
  font-size: 14px;
  font-weight: 400;
  width: 90%;
`;

export const StyledShoppingCardWishlist = styled.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
