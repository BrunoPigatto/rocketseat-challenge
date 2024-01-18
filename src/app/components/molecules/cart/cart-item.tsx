/* eslint-disable @next/next/no-img-element */
import { ProductInCart } from "@/app/types/products";
import { CartItem } from "@/hooks/redux/cartReducer";
import { formatPrice } from "@/utils/help-functions";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { TrashIcon } from "../../atoms/icons/trash-icon";
import { ChevronDown } from "../../atoms/icons/chevron-down";

interface CartItemProps {
  product: ProductInCart;
  handleUpdateQuantity(id: string, quantity: number): void;
  handleDeleteItem(id: string): void;
}

const Item = styled.li`
  display: grid;
  grid-template-columns: 33% 67%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: white;
  position: relative;

  img {
    max-width: 256px;
    width: 100%;
    border-radius: 8px 0 0 8px;
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
      width: 100%;

      p {
        font-size: 16px;
        font-weight: 600;
        color: var(--shapes-dark);
      }
    }
  }

  button {
    position: absolute;
    right: 20px;
    top: 16px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
`;

const SelectContainer = styled.div`
  padding: 8px 8px;
  border: 1px solid var(--text-dark);
  border-radius: 8px;
  max-height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--bg-secondary);

  svg {
    position: initial;
  }

  select {
    appearance: none;
    border: none;
    color: var(--text-dark);
    outline: none;
    cursor: pointer;
    background-color: var(--bg-secondary);
    width: 20px;
    text-align: center;
  }
`;

export function CartProductItem({
  product,
  handleUpdateQuantity,
  handleDeleteItem,
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
      <button
        onClick={() => handleDeleteItem(product?.id as string)}
        aria-label="deletar"
      >
        <TrashIcon />
      </button>

      <div>
        <div>
          <h4>{product?.name}</h4>
          <p>{product?.description}</p>
        </div>
        <div>
          <SelectContainer>
            <select onChange={handleChange} value={selectValue}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <ChevronDown />
          </SelectContainer>
          <p>{formatPrice(product?.price_in_cents)}</p>
        </div>
      </div>
    </Item>
  );
}
