import styled, { keyframes } from "styled-components"
import { Portal, Content } from "@radix-ui/react-dialog"

const contentShow = keyframes`
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateX(0);
  }
`

export const PortalContainer = styled(Portal)``

export const ContentMain = styled(Content)`
  width: 280px;
  background: ${({ theme }) => theme.colors.background};
  padding-block: 12px;
  border-radius: 6px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(190, 190, 191);
  -moz-box-shadow: 0px 0px 5px 0px rgba(190, 190, 191);
  box-shadow: 0px 0px 4px 0px rgba(190, 190, 191);

  position: absolute;
  bottom: 83px;
  left: 16px;

  button {
    width: 100%;
    padding-block: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    font-size: 0.875rem;
    line-height: 0;

    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors.secondColor2};
    }
  }

  animation: ${contentShow} 250ms ease-in-out;
`
