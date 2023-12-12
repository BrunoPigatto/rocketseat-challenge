import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";
import { FilterType } from "../types/filter-types";

interface FilterItemsProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemsProps>`
  font-family: inherit;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "4px solid var(--orange-low)" : "none"};
`;

export function FilterByType() {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  };

  return (
    <FilterList>
      <FilterItem
        selected={type == FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type == FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
        camisetas
      </FilterItem>
      <FilterItem
        selected={type == FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        canecas
      </FilterItem>
    </FilterList>
  );
}
