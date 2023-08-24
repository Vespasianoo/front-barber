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
    position: static;
    height: 120px;
    margin-bottom: 68px;
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
    > div {
      display: flex;
      align-items: center;
      padding-left: 16px;
      gap: 16px;
      background: #272727;
      height: 48px;
      border-radius: 4px;
      margin-top:12px;
  
      &:focus-within{
        outline: auto;
      }
      input {
        width: 100%;
        height: 100%;
        outline: none;
      }
    }
  }
`
