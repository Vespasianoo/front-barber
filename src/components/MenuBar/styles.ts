import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 36px 16px 12px;
  height: 100vh;

  border-right: 1px solid ${({ theme }) => theme.colors.textColor3};

  * {
    font-family: "Roboto", sans-serif;
  }
  // TODO - importar as fonts

  @media (min-width: 1024px) {
    width: 312px;
    flex-shrink: 0;
  }
`
export const TopSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > #logo {
    margin-bottom: 26px;
    > img {
      width: 28px;
    }
    > span {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    > #logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 26px;

      > img {
        width: min-content;
      }
      > span {
        display: initial;
        color: ${({ theme }) => theme.colors.white};
        /* font-family: Titillium Web; */
        font-size: 18px;
        margin-top: 8px;
      }
    }
  }
`

export const MenuLink = styled(NavLink)`
  width: fit-content;
  max-height: 48px;
  padding: 8px 12px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 6px; // ou 4px

  &:last-child {
    margin-top: 15px;
  }

  > span {
    display: none;
  }

  > svg {
    stroke: ${({ theme }) => theme.colors.textColor3};
  }

  &.active {
    background: ${({ theme }) => theme.colors.secondColor2};

    > svg {
      stroke: ${({ theme }) => theme.colors.textColor4};
    }
    > span {
      color: ${({ theme }) => theme.colors.textColor4};
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    > span {
      display: initial;
      color: ${({ theme }) => theme.colors.textColor3};
      font-size: 1rem;
      font-weight: 500;
      line-height: 24px;
      line-height: 0px;
    }
  }
`

export const BottonSide = styled.div`
  width: 100%;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.colors.textColor3};
`
