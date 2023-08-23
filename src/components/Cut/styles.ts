import styled from "styled-components"

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 18px 22px;
  
  background: ${({ theme }) => theme.colors.secondColor2};
  border-radius: 4px;

`

export const Left = styled.div`
  display: flex;
  flex-direction: column;


  span:first-child{
    font-weight: 700;
  }

  span:last-child {
    font-weight: 500;
  }
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  > span {
    font-weight: 500;
  }

  > button {
    display: grid;
    place-items: center;
    height: 35px;
    padding: 2px 16px;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primaryColor};
    
    color: #000;
    font-weight: 700;
    font-family: 'Roboto',sans-serif;
    font-size: 1rem;

    cursor: pointer;
}

`

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 24px; 
`