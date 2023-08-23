import styled from "styled-components"

export const Container = styled.a`
  > img {
    width: 28px;
  }
  > span {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      width: min-content;
    }
    > span {
      display: initial;
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.125rem;
      margin-top: 8px;
      font-family: "Overpass", sans-serif;
    }
  }
`
