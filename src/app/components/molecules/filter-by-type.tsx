import { useFilter } from "@/hooks/useFilter";
import styled from "styled-components";
import { FilterType } from "../../types/filter-types";
import { useEffect, useState } from "react";

interface SelectedProps {
  selected: boolean;
}

interface ListProps {
  open: boolean;
}

const FilterContainer = styled.div`
  position: relative;
`;

const FilterList = styled.ul<ListProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
    position: absolute;
    top: 120%;
    z-index: 9;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 6px;
    flex-direction: column;
    width: 200px;
    gap: 20px;
  }
`;

const FilterItem = styled.li<SelectedProps>`
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

const FilterButton = styled.button<SelectedProps>`
  border: ${(props) =>
    props.selected
      ? "1px solid var(--orange-low)"
      : "1px solid var(--text-dark)"};
  background-color: ${(props) =>
    props.selected ? "var(--orange-low)" : "transparent"};
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 18px;
  font-family: inherit;
  color: ${(props) => (props.selected ? "white" : " var(--text-dark)")};
  transition: ease all 0.3s;
`;

export function FilterByType() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { type, setType } = useFilter();
  const [windowSize, setWindowSize] = useState<number>(0);

  const max768px = windowSize < 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    if (window !== undefined) {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const handleChangeType = (value: FilterType) => {
    setType(value);
    setIsOpen(false);
  };

  const handleOpenFilter = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FilterContainer>
      {max768px && (
        <FilterButton selected={isOpen} onClick={handleOpenFilter}>
          Filtros
        </FilterButton>
      )}
      <FilterList open={isOpen}>
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
    </FilterContainer>
  );
}
