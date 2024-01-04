/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/utils/help-functions";
import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  img {
    width: 100%;
    height: 300px;
    border-radius: 4px 4px 0 0;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    color: var(--text-dark-2);
    width: 100%;
    padding: 8px 12px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--shapes-dark);
    width: 100%;
    padding: 8px 12px;
  }

  > div {
    width: 228px;
    height: 1px;
    background: var(--shapes);
  }
`;

export function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price);

  return (
    <Card>
      <img src={props.image} alt="Product Image" />
      <h3>{props?.title}</h3>
      <div></div>
      <p>{price}</p>
    </Card>
  );
}
