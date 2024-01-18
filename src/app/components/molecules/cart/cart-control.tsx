import { CartIcon } from "../../atoms/icons/cart-icon";
import styled from "styled-components";
import { CartItem, CartState } from "@/hooks/redux/cartReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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
  cursor: pointer;
`;

export function CartControl() {
  const router = useRouter();
  const cartItems = useSelector((state: CartState) => state.cartItems.items);

  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem?.quantity;
  }, 0);

  const handleCartNavigate = () => {
    router.push("carrinho");
  };

  return (
    <Container onClick={handleCartNavigate}>
      <CartIcon />
      <CartCount onClick={() => console.log({ cartItems })}>
        {totalQuantity}
      </CartCount>
    </Container>
  );
}
