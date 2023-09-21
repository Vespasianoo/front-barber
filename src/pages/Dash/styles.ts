import styled from "styled-components"

import { NavLink } from "react-router-dom"
export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  > span {
    color: ${({ theme }) => theme.colors.textColor1};
    font-family: "Roboto", sans-serif;
    font-size: 1.375rem;
    font-weight: 500;
    line-height: 24px;
  }
`
export const Button = styled(NavLink)`
  display: grid;
  place-items: center;
  width: 240px;
  height: 48px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primaryColor};

  color: ${({ theme }) => theme.colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 1rem;

  cursor: pointer;
`
// TODO - importar a fonte
