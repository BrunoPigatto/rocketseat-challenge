/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/app/types/products";
import { CartItem } from "@/hooks/redux/cartReducer";
import { formatPrice } from "@/utils/help-functions";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
}

const Item = styled.li`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;

  img {
    max-width: 256px;
    width: 100%;
    border-radius: 8xp 0 0 8px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 16px 20px;
    color: var(--text-dark-2);
    width: 100%;
    height: 100%;

    h4 {
      font-size: 20px;
      font-weight: 300;
    }

    p {
      font-size: 12px;
      font-weight: 400;
    }

    div:nth-child(2) {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 16px;
        font-weight: 600;
        color: var(--shapes-dark);
      }
    }
  }
`;

export function CartProductItem({
  product,
  handleUpdateQuantity,
}: CartItemProps) {
  const [selectValue, setSelectValue] = useState<number>(product?.quantity);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSelectValue = Number(e.target.value);
    handleUpdateQuantity(product.id as string, newSelectValue);
    setSelectValue(newSelectValue);
  };
  return (
    <Item>
      <img src={product?.image_url} alt="product-image" />
      <div>
        <div>
          <h4>{product?.name}</h4>
          <p>{product?.description}</p>
        </div>
        <div>
          <select onChange={handleChange} value={selectValue}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <p>{formatPrice(product?.price_in_cents)}</p>
        </div>
      </div>
    </Item>
  );
}
