import styled from "styled-components";
import { FinalizePurchaseButton } from "../atoms/finalize-purchase-button";
import { formatPrice } from "@/utils/help-functions";

interface SidebarProps {
  totalValue: number;
}

const SidebarContainer = styled.aside`
  background-color: #fff;
  padding: 16px 24px;

  h2 {
    color: var(--text-dark-2);
    font-size: 20px;
    margin-bottom: 29px;
  }
`;

const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--text-dark-2);
    margin-bottom: 12px;
  }
`;

const Divider = styled.span`
  display: block;
  border-bottom: 1px solid var(--shapes);
  margin-top: 12px;
  margin-bottom: 8px;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-dark-2);
  }
`;

export function Sidebar({ totalValue }: SidebarProps) {
  const finalValue = totalValue + 40;

  return (
    <>
      <SidebarContainer>
        <h2>RESUMO DO PEDIDO</h2>
        <div>
          <InfosContainer>
            <p>Subtotal de produtos</p>
            <p>{formatPrice(totalValue)}</p>
          </InfosContainer>
          <InfosContainer>
            <p>Entrega</p>
            <p>{formatPrice(4000)}</p>
          </InfosContainer>
          <Divider />
          <TotalContainer>
            <p>total</p>
            <p>{formatPrice(finalValue)}</p>
          </TotalContainer>
          <FinalizePurchaseButton />
        </div>
      </SidebarContainer>
    </>
  );
}
