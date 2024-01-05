import { Product } from "@/app/types/products";
import { formatPrice } from "@/utils/help-functions";
import styled from "styled-components";

const SingleProductCard = styled.div`
  span {
    font-size: 16px;
    font-weight: 400;
    color: var(--text-dark-2);
  }

  h2 {
    font-size: 32px;
    font-weight: 300;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  h3 {
    color: var(--text-dark);
    font-size: 16px;
    font-weight: 500;
    margin-top: 58px;
    margin-bottom: 8px;
  }

  span:nth-of-type(2) {
    display: block;
    font-size: 20px;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--text-dark);
  }

  p:nth-of-type(2) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export default function SingleProduct(data: Product) {
  return (
    <SingleProductCard>
      <span>{data?.category}</span>
      <h2>{data?.name}</h2>
      <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
      <p>
        Frete de R$ 40,00 para todo o Brasil. Grátis para compras acima de R$
        900,00
      </p>
      <h3>DESCRIÇÃO</h3>
      <p>{data?.description}</p>
    </SingleProductCard>
  );
}
