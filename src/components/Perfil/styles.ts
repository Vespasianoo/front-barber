import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  place-items: center;
  > div,
  svg {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 100%;
    grid-template-columns: min-content 1fr min-content;
    gap: 12px;
    padding: 12px;

    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: rgba(231, 233, 234, 0.1);
    }
    > div {
      display: initial;
      justify-self: start;
      > span {
        display: block;
        font-family: "Inter", sans-serif; // TODO - olhar fonts qual fica melhorr
        font-size: 0.875rem;
        line-height: 20px;
      }
      > span:first-child {
        color: ${({ theme }) => theme.colors.white};
        font-weight: 500;
        text-transform: capitalize;
      }

      > span:last-child {
        color: ${({ theme }) => theme.colors.textColor4};
      }
    }
    svg {
      display: initial;
    }
  }
`
