import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 28.125rem;
  margin-inline: auto;
  margin-top: 2.375rem;
  padding-inline: 0.75rem;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 1280px;
    padding-inline: 1.375rem;
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`
export const SocialLinks = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 1.625rem;
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
    gap: 0.75rem;
    margin-bottom: 2.375rem;
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
      gap: 0.75rem;

      height: 3rem;
      width: min(100%, 15rem);
      padding-inline: 1rem;

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
    grid-template-columns: 21.875rem 1fr;
    place-items: center;
    justify-content: center;

    > div {
      gap: 2rem;
      width: 21.875rem;
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
      max-width: min(100%, 31.25rem);
      justify-self: end;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    > div {
      width: 100%;
      > h1 {
        font-size: 2.25rem;
      }
      > p {
        font-size: 1.25rem;
      }
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: 33.125rem 1fr;
    > div {
      > h1 {
        font-size: 2.5rem;
      }
      > p {
        font-size: 1.5rem;
      }
    }
    > img {
      width: 34.375rem;
    }
  }
`
