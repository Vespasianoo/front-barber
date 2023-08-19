import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 58px auto 0 auto;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > ul {
      display: flex;
      gap: 26px;
    }
  }

  > main {
    display: grid;
    justify-content: space-between;
    column-gap: 32px;
    place-items: center;
    grid-template-columns: 540px 1fr;

    *,
    button {
      font-family: "Overpass", sans-serif;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 32px;

      > h1 {
        color: ${({ theme }) => theme.colors.textColor2};
        font-size: 40px;
        font-weight: 700;
      }
      > p {
        color: ${({ theme }) => theme.colors.textColor3};
        text-align: justify;
        font-size: 24px;
      }
    }
  }
`
