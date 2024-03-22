import styled from "styled-components";

export const StyledFilterRow = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1248px;
  margin: auto;
  border-bottom: 1px solid #e5e5e5;
  border-top: 1px solid #e5e5e5;
  padding: 24px 0px;
`;

export const StyledFilterSelectedItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledFilterSelectedItems = styled.div`
  color: var(--Text-Text, #252020);
  font-size: 18px;
  font-weight: 700;
  line-height: 40px; /* 222.222% */
  text-transform: uppercase;
`;

export const StyledFilterRemoveFilter = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: var(--Text-Secondary-Text, #888792);
  font-size: 16px;
  font-weight: 400;
  line-height: 40px; /* 250% */
  text-decoration-line: underline;
`;

export const StyledFilterDropDownContainer = styled.div`
  position: relative;
`;

export const StyledFilterDropDownTrigger = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  color: var(--Text-Text, #252020);
  font-size: 18px;
  font-weight: 700;
  line-height: 40px; /* 222.222% */
  text-transform: uppercase;
`;

export const StyledFilterDropDownContent = styled.div``;

export const StyledFilterDropDown = styled.div`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 7px 1px rgba(163, 170, 175, 0.2);
  width: 235px;
  flex-shrink: 0;
  padding: 24px 42px;
`;

export const StyledFilterDropDownItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: var(--Text-Text, #252020);
  font-size: 18px;
  font-weight: 700;
  line-height: 40px; /* 222.222% */
  text-transform: uppercase;
`;
