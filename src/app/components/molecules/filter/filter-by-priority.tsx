import styled from "styled-components";
import { ChevronDown } from "../../atoms/icons/chevron-down";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "../../../types/priority-types";

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  > button {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background: transparent;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  > svg {
    transition: ease all 0.4s;
    margin-left: 16px;
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  z-index: 10;
  width: 176px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 6px;
  list-style: none;
  top: 100%;
  right: 0px;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setPriority } = useFilter();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por:
        <ChevronDown isOpen={isOpen} />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
