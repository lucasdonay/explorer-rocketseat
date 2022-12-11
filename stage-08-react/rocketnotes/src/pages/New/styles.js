import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105x auto;
grid-template-areas:
"header"
"content";

> main {
  grid-area: content;
  overflow-y: scroll;
}

> main::-webkit-scrollbar {
    display: none;
}

.tags {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
`

export const Form = styled.form`
  max-width: 530px;
  margin: 18px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

`