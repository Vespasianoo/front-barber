import styled from "styled-components"

export const Button = styled.button`
  display: grid;
  place-items: center;
  padding-inline: 20px;
  max-width: 240px;
  height: 48px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primaryColor};

  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 0;

  cursor: pointer;
`
