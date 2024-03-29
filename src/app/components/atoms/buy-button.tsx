import styled from "styled-components";
import { ShoppingBagIcon } from "./icons/shopping-bag-icon";
import Spinner from "./spinner";

interface BuyButtonProps {
  handleAddToCart: () => void;
  isLoading: boolean;
}

const Button = styled.button`
  background-color: var(--blue-blend);
  mix-blend-mode: multiply;
  border-radius: 4px;
  border: transparent;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 448px;
  width: 100%;
  transition: ease all 0.3s;

  &:hover {
    transition: ease all 0.3s;
    background-color: var(--green);
  }
`;

export default function BuyButton({
  handleAddToCart,
  isLoading,
}: BuyButtonProps) {
  return (
    <Button onClick={handleAddToCart}>
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <ShoppingBagIcon /> ADICIONAR AO CARRINHO
        </>
      )}
    </Button>
  );
}
