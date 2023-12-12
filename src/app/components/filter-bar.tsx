"use client";

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";

interface FilterProps {}

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: start;
`;

export function FilterBar(props: FilterProps) {
  return (
    <FilterContainer>
      <FilterByType />
    </FilterContainer>
  );
}
