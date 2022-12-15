import styled from 'styled-components'
import { RiShutDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const Container = styled.header`
grid-area: header;
height: 105px;
width: 100%;
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
display: flex;
justify-content: space-between;
padding: 0 80px;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  

  > img {
    width: 60px;
    height: 60px;
    border-radius: 8px;    
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    line-height: 24px;

    span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
   }

    strong {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
border: none;
background: none;

> svg {
  color: ${({ theme }) => theme.COLORS.GRAY_100};;
}

font-size: 24px;
`


