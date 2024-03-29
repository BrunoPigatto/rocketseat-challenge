import { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";

const InputContainer = styled.div`
  position: relative;
  max-width: 352px;
  width: 100%;
  background-color: var(--bg-secondary);
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const PrimaryInput = styled.input`
  width: 90%;
  padding: 10px 16px;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-dark);
  background-color: transparent;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleSearchProduct: (value: string) => void;
}

export function PrimaryInputSearch(props: InputProps) {
  const { handleSearchProduct, ...restProps } = props;
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => handleSearchProduct(event.target.value)}
        {...restProps}
      />
      <SearchIcon />
    </InputContainer>
  );
}
