import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-columns: 250px auto;
grid-template-rows: 105px 128px auto 64px;
grid-template-areas: 
"brand header"
"menu search"
"menu content"
"newnote content";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

`

export const Brand = styled.div`
grid-area: brand;
background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

display: flex;
align-items: center;
justify-content: center;

> h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.ORANGE};
}
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Menu = styled.ul`
grid-area: menu;
background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};
padding-top: 64px;
text-align: center;

li {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 24px;
}

li:nth-child(1) {
  color: ${({ theme }) => theme.COLORS.ORANGE};
}
`

export const Search = styled.div`
grid-area: search;
padding: 64px 64px 0;

`

export const Content = styled.div`
grid-area: content;
background:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
padding: 0 64px;
overflow-y: scroll;
margin-top: 22px;
::-webkit-scrollbar {
    display: none;
}

> h1 {
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: 400;
  padding-bottom: 20px;
  margin-top: 64px;
  font-size: 20px;
  line-height: 26px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
}
`

export const NewNote = styled(Link)`
grid-area: newnote;
background:  ${({ theme }) => theme.COLORS.ORANGE};

display: flex;
align-items: center;
justify-content: center;
color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;

>svg {
  margin-right: 8px;
}
`