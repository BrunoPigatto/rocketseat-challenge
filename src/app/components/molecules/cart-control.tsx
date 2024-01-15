import { CartIcon } from "../atoms/icons/cart-icon";
import styled from "styled-components";
import { CartItem, CartState } from "@/hooks/redux/cartReducer";
import { useSelector } from "react-redux";

const CartCount = styled.p`
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
  const cartItems = useSelector((state: CartState) => state.cartItems.items);

  return (
    <Container>
      <CartIcon />
      <CartCount onClick={() => console.log({ cartItems })}>
        {cartItems?.length}
      </CartCount>
    </Container>
  );
}
