import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    background-color: ${({ theme }) => theme.COLORS.SECOND};
    height: 144px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 144px;
  }

  button,
  a {
    opacity: 0.7;
    transition: 0.3s ease-in-out;
    margin-top: 20px;
    cursor: pointer;
  }

  button:hover {
    opacity: 1;
    color: white;
  }
`;

export const Form = styled.form`
  max-width: 360px;
  margin: 30px auto;

  #avatar {
    display: none;
  }

  .white div:nth-child(n + 1):nth-child(-n + 2),
  .white div:nth-child(n + 1):nth-child(-n + 2) input::placeholder {
    color: white;
  }

  .white div:nth-child(3n) {
    margin-top: 20px;
  }
`;

export const Avatar = styled.div`
  width: 185px;
  position: relative;
  height: 185px;
  margin: -124px auto 34px;

  > img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 50%;
    padding: 3px;
    position: absolute;
    bottom: 7px;
    right: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > label:hover {
    transform: scale(1.1);
  }
`;
