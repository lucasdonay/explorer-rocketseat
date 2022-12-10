import styled from "styled-components";

export const Container = styled.div`
  header {
    display: flex;
    width: 100%;
    height: 144px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};      
        margin: 47px 0 47px 147px;
        width: 40px;
        height: 40px;
      }    
 }
`

export const Form = styled.form`
width: 100%;
max-width: 340px;
margin: 0 auto;
margin-top: 157px;
display: flex;
flex-direction: column;
justify-content: center;

.white ::placeholder{
  color: white;  
}

.white svg:nth-child(-n+2) {
    color: white;
  }

`
export const Avatar = styled.div`

img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -250px auto 62px;
}

`