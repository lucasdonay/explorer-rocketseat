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
max-width: 340px;
margin: -100px auto 0;


.white ::placeholder{
  color: white;  
}

.white svg:nth-child(-n+2) {
    color: white;
  }

  .white:nth-child(-n+2) {
    color: white;
    margin-bottom: 20px;
  }

`
export const Avatar = styled.div`
  margin: 0 auto 32px;
  position: relative;
  width: 186px;
  height: 186px;


img {
  width: 186px;
  height: 186px;
  border-radius: 50%;

}

> label {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 7px;
  right: 7px;
  cursor: pointer;

  input {
    display: none;
  }
}



`