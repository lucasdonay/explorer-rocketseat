import styled from 'styled-components';
import backgroundImage from '../../assets/teste.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  /* background-color: red; */
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 0 15.6rem;

  h1 {
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  > p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 48px;
  }

  h2 {
    margin-bottom: 48px;
  }

  > button {
    margin-top: 25px;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    margin-top: 42px;
  }
`;

export const Background = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  flex: 1;
  background-size: cover;
`;
