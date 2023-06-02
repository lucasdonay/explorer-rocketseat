import styled from 'styled-components';

export const Container = styled.div`
  .input {
    width: 100%;
    align-items: center;
    display: flex;
    padding: 0 64px;
    justify-content: center;
    div {
      max-width: 800px;
      width: 100%;
    }
  }

  .inputs {
    display: flex;
    width: 100%;
    gap: 40px;

    > div {
      max-width: 100%;
    }
  }

  main {
    padding: 24px 123px;
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 47px;
    margin-bottom: 40px;
  }

  #observacoes {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 19px 16px;
    margin-top: 40px;
    gap: 8px;
    width: 100%;
    border: none;
    resize: none;
    height: 274px;
    background: #262529;
    color: white;
    border-radius: 10px;
  }

  .marcadores {
    > h3 {
      margin-bottom: 30px;
      margin-top: 40px;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .tags {
    display: flex;
    background: #0d0c0f;
    border-radius: 8px;
    gap: 10px;
    padding: 24px;
  }

  .buttons {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }

  .button-one {
    background: #0d0c0f;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;
