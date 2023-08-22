import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin-inline: auto;
  margin-top: 38px;
  padding-inline: 12px;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 1280px;
    padding-inline: 22px;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
export const SocialLinks = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 26px;
    > li svg {
      stroke: ${({ theme }) => theme.colors.primaryColor};
    }
  }
`
export const Main = styled.main`
  * {
    font-family: "Overpass", sans-serif;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 38px;
    > h1 {
      color: ${({ theme }) => theme.colors.textColor2};
      font-size: 1.375rem;
      font-weight: 700;
      text-align: center;
    }

    > p {
      color: ${({ theme }) => theme.colors.textColor3};
      text-align: center;
      font-size: 1rem;
    }

    > button {
      display: flex;
      place-items: center;
      justify-content: center;
      gap: 12px;

      height: 48px;
      width: min(100%, 240px);
      padding-inline: 16px;

      border-radius: 4px;
      background: ${({ theme }) => theme.colors.primaryColor};

      color: ${({ theme }) => theme.colors.background};
      font-size: 1rem;
      font-weight: 700;

      cursor: pointer;

      margin-inline: auto;
    }
  }
  > img {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 350px 1fr;
    place-items: center;
    justify-content: center;

    > div {
      gap: 32px;
      width: 350px;
      > h1 {
        font-size: 1.625rem;
        text-align: initial;
      }
      > p {
        font-size: 1.375rem;
        text-align: initial;
      }

      > button {
        margin: 0;
      }
    }
    > img {
      max-width: 500px;
      justify-self: end;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    > div {
      width: 100%;
      > h1 {
        font-size: 36px;
      }
      > p {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 530px 1fr;
    > div {
      > h1 {
        font-size: 2.5rem;
      }
      > p {
        font-size: 1.5rem;
      }
    }
    > img {
      width: 550px;
    }
  }
`
