import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: 70px;
  > * {
    font-family: 'Roboto',sans-serif;
  }

  > header {
    > h2 {
      text-align: center;
      color: ${({theme})=> theme.colors.textColor1};
      font-size: 24px;
      line-height: 24px; 
    }
    
    > h3 {
      color: ${({ theme }) => theme.colors.primaryColor};
      font-family: 'Roboto', sans-serif;
      font-size: 38px;
      font-weight: 700;
      line-height: 24px; 
      margin-top: 24px;
    }
  }
  > main {
    width: 856px;
    margin-top: 68px;

    > div {
      display: flex;
      align-items: center;
      padding-left: 16px;
      gap: 16px;
      background: #272727;
      height: 48px;
      border-radius: 4px;

      &:focus-within{
        outline: auto;
      }
      input {
        width: 100%;
        height: 100%;
        outline: none;
      }
    }

    > ul {
      margin-top: 52px;

      display: flex;
      flex-direction: column;
      gap: 22px;
    }
  }
`
