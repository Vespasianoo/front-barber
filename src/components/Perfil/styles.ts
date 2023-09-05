import styled from "styled-components"
import { Trigger } from "@radix-ui/react-dialog"

export const TriggerContainer = styled(Trigger)`
  display: grid;
  place-items: center;
  cursor: pointer;
  > div,
  svg {
    display: none;
  }
  > img {
    width: 40px;
    border-radius: 4px;
    object-fit: cover;
    align-self: center;
  }
  @media (min-width: 1024px) {
    width: 100%;
    grid-template-columns: min-content 1fr min-content;
    gap: 12px;
    padding: 12px;

    border-radius: 6px;

    &:hover {
      background: rgba(231, 233, 234, 0.1);
    }
    > div {
      display: grid;
      > span {
        display: block;
        font-family: "Inter", sans-serif; // TODO - olhar fonts qual fica melhorr
        font-size: 0.875rem;
        line-height: 20px;
      }
      > span:first-child {
        justify-self: flex-start;
        color: ${({ theme }) => theme.colors.textColor2};
        font-weight: 600;
        text-transform: capitalize;
      }

      > span:last-child {
        color: ${({ theme }) => theme.colors.textColor1};
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    svg {
      display: initial;
    }
  }
`
