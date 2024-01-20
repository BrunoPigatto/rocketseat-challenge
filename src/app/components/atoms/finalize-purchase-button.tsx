import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  margin-top: 40px;
  padding: 12px;
  background-color: var(--green);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  transition: ease all 0.3s;
  border-radius: 4px;

  &:hover {
    transition: ease all 0.3s;
    background-color: var(--blue-blend);
  }
`;

export function FinalizePurchaseButton() {
  return <Button>FINALIZAR COMPRA</Button>;
}
