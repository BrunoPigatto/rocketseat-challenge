"use client";

import styled from "styled-components";
import { BackButton } from "../components/atoms/back-button";
import { useSelector } from "react-redux";
import { CartState } from "@/hooks/redux/cartReducer";
import { formatPrice } from "@/utils/help-functions";
import { CartProductItem } from "../components/molecules/cart/cart-item";

const Container = styled.div`
  padding: 34px 30px;
  width: 100%;
  height: 100%;
`;

const CartContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
`;

const CartListContainer = styled.div`
  margin-top: 24px;

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    color: var(--text-dark-2);
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`;

const CartList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
`;

export default function CardPage() {
  const cartItems = useSelector((state: CartState) => state.cartItems.items);

  const itemsQuantity = cartItems?.length;
  const sumTotalValue = cartItems?.reduce((total, item) => {
    return total + item.price_in_cents * item.quantity;
  }, 0);
  const totalValue = formatPrice(sumTotalValue);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = cartItems?.map((item) => {
      if (item?.id !== id) {
        return item;
      }
      return { ...item, quantity: quantity };
    });
  };

  return (
    <Container>
      <CartContainer>
        <BackButton navigate="/" />
        <CartListContainer onClick={() => console.log(totalValue)}>
          <h2>Seu carrinho</h2>
          <p>
            Total ( {itemsQuantity} produtos ) <span>{totalValue}</span>
          </p>
          <CartList>
            {cartItems?.map((item) => {
              return (
                <CartProductItem
                  key={item?.id}
                  product={item}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
              );
            })}
          </CartList>
        </CartListContainer>
      </CartContainer>
    </Container>
  );
}
