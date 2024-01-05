"use client";

import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputSearch } from "../atoms/primary-input";
import { CartControl } from "../molecules/cart-control";
import { useFilter } from "@/hooks/useFilter";
import { useRouter } from "next/navigation";

const sairaStencil = Saira_Stencil_One({
  weight: ["400"],
  subsets: ["latin"],
});
const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 30px;
  background-color: #fff;
`;

const TagHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 20px 30px;
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export function Header() {
  const router = useRouter();
  const { search, setSearch } = useFilter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <HeaderContainer>
      <TagHeader>
        <Logo onClick={handleNavigate} className={sairaStencil.className}>
          Capputeeno
        </Logo>
        <div>
          <PrimaryInputSearch
            value={search}
            handleSearchProduct={setSearch}
            placeholder="Procurando por algo específico?"
          />
          <CartControl />
        </div>
      </TagHeader>
    </HeaderContainer>
  );
}
