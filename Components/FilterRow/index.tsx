import Image from "next/image";
import React from "react";
import {
  StyledFilterDropDown,
  StyledFilterDropDownContainer,
  StyledFilterDropDownTrigger,
  StyledFilterRemoveFilter,
  StyledFilterRow,
  StyledFilterSelectedItemContent,
  StyledFilterSelectedItems,
} from "./index.styles";

export default function FilterRow() {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledFilterRow>
      <StyledFilterSelectedItemContent>
        <StyledFilterSelectedItems>3425 Items</StyledFilterSelectedItems>
        <StyledFilterRemoveFilter>
          <Image src="/arrow-left.svg" width={16} height={16} alt="back" />
          HIDE FILTER
        </StyledFilterRemoveFilter>
      </StyledFilterSelectedItemContent>
      <StyledFilterDropDownContainer>
        <StyledFilterDropDownTrigger
          onClick={() => {
            setOpen(!open);
          }}
        >
          RECOMMENDED
          <Image
            src="/arrow-down.svg"
            width={16}
            height={16}
            alt="sort-filter"
          />
        </StyledFilterDropDownTrigger>
        {open && <StyledFilterDropDown>ABCD</StyledFilterDropDown>}
      </StyledFilterDropDownContainer>
    </StyledFilterRow>
  );
}
