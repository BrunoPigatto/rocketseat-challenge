import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 17px;
  height: 17px;
  font-size: 14px;
  padding: 0 5px;
  position: absolute;
  right: -10px;
  top: 10px;
  background-color: var(--delete-color);
  color: #fff;
`;

const Container = styled.div`
  position: relative;
  margin-left: 20px;
`;

export function CartControl() {
  const { value } = useLocalStorage("cart-item");

  console.log(value);

  return (
    <Container>
      <CartIcon />
      <CartCount>{value.length}</CartCount>
    </Container>
  );
}
