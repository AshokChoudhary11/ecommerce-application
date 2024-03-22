import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  background: var(--Misc-White, #fff);
  width: 100%;
`;
export const StyledHeader = styled.header`
  padding: 40px 96px;
`;

export const StyledLogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  h1 {
    color: #000;
    font-size: 36px;
    font-weight: 800;
    letter-spacing: 1px;
  }
`;

export const StyledNavigationActionContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
`;

export const StyledNavigationAction = styled.a``;

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: flex-start;
  gap: 64px;
  margin: auto;
  width: fit-content;
  margin-bottom: 24px;
`;

export const StyledNavBarItem = styled.a`
  color: var(--Text-Text, #252020);
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
`;
